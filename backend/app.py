from flask import Flask, request, jsonify
from .serializers import serializeArticle
from .db import ArticleDB
from .models import Base

app = Flask(__name__)
article_db = ArticleDB('sqlite:///test.sqlite')
Base.metadata.create_all(article_db.engine)


@app.get('/')
def index():
    return jsonify({"Hello": "World"})


@app.get('/articles')
def get_articles():
    articles = article_db.find_all()
    list_of_articles = list(map(lambda x: serializeArticle(x), articles))
    return jsonify(list_of_articles)


@app.get('/articles/<int:id>')
def get_article_by_id(id: int):
    pass


@app.post('/articles')
def create_article():
    pass
