from flask import Flask, jsonify
import json
from datetime import datetime, timedelta
from textblob import TextBlob
from newsapi import NewsApiClient
import json
from collections import defaultdict
from flask_cors import CORS

today = datetime.now().strftime('%Y-%m-%d')
week_ago = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')

print(today)
print(week_ago)



newsapi = NewsApiClient(api_key='***REMOVED***') #Insert your api key here

pages = []
for i in range(1, 5):
    news_articles = newsapi.get_everything(from_param=week_ago,
                                        to=today,
                                        page=i,
                                        sources='the-verge, associated-press',
                                        language='en')
    pages.append(news_articles)

print(news_articles)
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
        if data == [None]:
            data = news_articles["articles"][i]["description"]
        if data == [None]:
            data = news_articles["articles"][i]["title"]
        blob = TextBlob(data[0])
        result = blob.sentiment
        if(result[0] > .2):
            articles.append(news_articles["articles"][i])
# print(len(articles))
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