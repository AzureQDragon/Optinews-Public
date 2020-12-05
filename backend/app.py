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
week_ago = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')

textrazor.api_key = "***REMOVED***"
newsapi = NewsApiClient(api_key='***REMOVED***') #Insert your api key here
client = textrazor.TextRazor(extractors=["entities", "topics"])
client.set_classifiers(["textrazor_newscodes"])
client.set_cleanup_mode("cleanHTML")
pages = []

# Add pages of articles from a specific source
def addpages(source):
    for i in range(1, 3):
        news_articles = newsapi.get_everything(from_param=week_ago,
                                            to=today,
                                            page=i,
                                            sources=source,
                                            language='en',
                                            page_size=50)
        pages.append(news_articles)

#Add pages from each source we want
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

# Checks that the tag is in the freebase type
def tag_is_in(freebase_type, tag, article_tag):
    if tag in freebase_type and tag not in article_tag:
        article_tag.append(tag)


def filter_news_articles():
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

                # Genereate a textrazor
                response = client.analyze_url(news_articles["articles"][i]["url"])

                # Switch long variable name
                news_articles["articles"][i]["tags"] = []
                news_pointer = news_articles["articles"][i]["tags"]

                # add tags based on what the textrazor finds
                for entity in response.entities():
                    for each in entity.freebase_types:
                        tag_is_in(each, "sports", news_pointer)
                        tag_is_in(each, "government", news_pointer)
                        tag_is_in(each, "people", news_pointer)
                        tag_is_in(each, "business", news_pointer)
                        tag_is_in(each, "technology", news_pointer)
                        if ("tv" in each or "radio" in each or "cvg" in each or "book" in each) and "entertainment" not in news_pointer:
                            news_pointer.append("entertainment")

                if len(news_articles["articles"][i]["tags"]) == 0:
                    news_articles["articles"][i]["tags"].append("miscellaneous")
                news_articles["articles"][i]["tags"].sort()

                # Make sure to not add duplicate articles
                if (news_articles["articles"][i] not in articles):
                    articles.append(news_articles["articles"][i])

filter_news_articles()

returndict = {"length": len(articles), "articles": articles}
app = Flask(__name__)
CORS(app)

#Get request for articles
@app.route('/articles', methods=['GET'])
def get_articles():
    return jsonify(returndict)