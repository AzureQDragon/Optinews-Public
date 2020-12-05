from flask import Flask, jsonify
import json
from datetime import datetime, timedelta
from textblob import TextBlob
from newsapi import NewsApiClient
import json
from collections import defaultdict
from flask_cors import CORS
import textrazor

today = datetime.now().strftime('%Y-%m-%d')
yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
week_ago = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')

textrazor.api_key = "***REMOVED***"
newsapi = NewsApiClient(api_key='***REMOVED***') #Insert your api key here
client = textrazor.TextRazor(extractors=["entities", "topics"])
client.set_classifiers(["textrazor_newscodes"])
client.set_cleanup_mode("cleanHTML")
pages = []

def addpages(source):
    for i in range(1, 3):
        news_articles = newsapi.get_everything(from_param=week_ago,
                                            to=today,
                                            page=i,
                                            sources=source,
                                            language='en',
                                            page_size=50)
        pages.append(news_articles)

addpages('the-verge')
addpages('associated-press')
addpages('ars-technica')
addpages('cnn')
addpages('reuters')
addpages('wired')


#Lists to parse through json data
articles = []
data = []
"""
Takes all top articles and runs the content or description or title through the monkeylearn semantic
analysis. Based on if it is postive and has a certain confidence it will append them to the articles
list.
"""
for news_articles in pages:
    for i in range(len(news_articles["articles"])):

        data = [news_articles["articles"][i]["content"]]
        if data[0] == None:
            continue
        if data == [None]:
            data = news_articles["articles"][i]["description"]
        if data == [None]:
            data = news_articles["articles"][i]["title"]
        blob = TextBlob(data[0])

        result = blob.sentiment
        if(result[0] > .5):
            response = client.analyze_url(news_articles["articles"][i]["url"])
            news_articles["articles"][i]["tags"] = []
            # TODO refactor code below
            for entity in response.entities():
                for each in entity.freebase_types:
                    if "sports" in each and "sports" not in news_articles["articles"][i]["tags"]:
                        news_articles["articles"][i]["tags"].append("sports")
                    if "government" in each and "government" not in news_articles["articles"][i]["tags"]:
                        news_articles["articles"][i]["tags"].append("government")
                    if ("tv" in each or "radio" in each or "cvg" in each or "book" in each) and "entertainment" not in news_articles["articles"][i]["tags"]:
                        news_articles["articles"][i]["tags"].append("entertainment")
                    if "people" in each and "people" not in news_articles["articles"][i]["tags"]:
                        news_articles["articles"][i]["tags"].append("people")
                    if "business" in each and "business" not in news_articles["articles"][i]["tags"]:
                        news_articles["articles"][i]["tags"].append("business")


            if len(news_articles["articles"][i]["tags"]) == 0:
                news_articles["articles"][i]["tags"].append("misc")
            news_articles["articles"][i]["tags"].sort()

            if (news_articles["articles"][i] not in articles):
                articles.append(news_articles["articles"][i])
print(len(articles))
# print(articles)

returndict = {"length": len(articles), "articles": articles}
app = Flask(__name__)
CORS(app)
#Returns first article in articles
@app.route('/')
def Articles():
    with open('articles.json', 'r') as infile:
        return infile.read()

@app.route('/articles', methods=['GET'])
def get_articles():
    return jsonify(returndict)