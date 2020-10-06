from flask import Flask 
import requests
from newsapi import NewsApiClient
from monkeylearn import MonkeyLearn

ml = MonkeyLearn('4c67b4c62c390c6c14cde310bda788b0a3fe0639')
modelid = "cl_pi3C7JiL"
newsapi = NewsApiClient(api_key='***REMOVED***') #Insert your api key here
top_headlines = newsapi.get_top_headlines(country='us',
                                          language='en')

#Lists to parse through json data
articles = []
data = []

"""
Takes all top articles and runs the content or description or title through the monkeylearn semantic
analysis. Based on if it is postive and has a certain confidence it will append them to the articles
list.
"""
for i in range(len(top_headlines["articles"])):
    data = [top_headlines["articles"][i]["content"]]
    if data == [None]:
        data = [top_headlines["articles"][i]["description"]]
    if data == [None]:
        data = [top_headlines["articles"][i]["title"]]
    result = ml.classifiers.classify(modelid, data)
    if(result.body[0]["classifications"][0]["tag_name"] == "Positive" and result.body[0]["classifications"][0]["confidence"] >= .7):
        articles.append(top_headlines["articles"][i])

#Testing output
print(articles)

app = Flask(__name__)

#Returns first article in articles
@app.route('/')
def FirstArticle():
    return articles[0]