from flask import Flask, request, jsonify
from .db import ArticleDB
from .models import Base
from .serializers import serializeArticle

app = Flask(__name__)
article_db = ArticleDB('sqlite:///test.sqlite')
Base.metadata.create_all(article_db.engine)


@app.get('/')
def index():
    return "Hello"


@app.get('/articles')
def get_articles():
    pass


@app.get('/articles/<int:id>')
def get_article_by_id(id: int):
    pass


@app.post('/articles')
def create_article():
    pass
