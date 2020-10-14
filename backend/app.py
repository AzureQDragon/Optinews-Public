from flask import Flask 
import json


app = Flask(__name__)

#Returns first article in articles
@app.route('/')
def Articles():
    with open('articles.json', 'r') as infile:
        return infile.read()