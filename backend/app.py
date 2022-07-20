from flask import Flask, request, jsonify
from .serializers import article_to_dict, dict_to_article
from .db import ArticleDB
from .models import Base, Article

app = Flask(__name__)
article_db = ArticleDB('sqlite:///test.sqlite')
Base.metadata.create_all(article_db.engine)


@app.get('/')
def index():
    return jsonify({"Hello": "World"})


@app.get('/articles')
def get_articles():
    articles = article_db.find_all()
    list_of_articles = list(map(lambda x: article_to_dict(x), articles))
    return jsonify(list_of_articles)


@app.get('/articles/<int:id>')
def get_article_by_id(id: int):
    pass


@app.post('/articles')
def create_article():
    data = request.form
    if not ({'title', 'author_name', 'body'}.issubset(data.keys())):
        return {"error": "Title, Author name or Body not present"}, 400
    article = dict_to_article({
        'title': data['title'],
        'author_name': data['author_name'],
        'body': data['body'],
    })
    article = article_db.insert_article(article)
    return jsonify(article_to_dict(article)), 201
