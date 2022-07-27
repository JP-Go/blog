from flask import Flask, request, jsonify
from werkzeug.exceptions import BadRequest, NotFound
from . import services, serializers

app = Flask(__name__)


@app.get('/')
def index():
    return jsonify({"Hello": "World"})


# Get all articles
@app.get('/articles')
def get_articles():
    articles = services.find_all()
    list_of_articles = list(map(lambda x: article_to_dict(x), articles))
    return jsonify(list_of_articles)


# Find article by id
@app.get('/articles/<int:id>')
def get_article_by_id(id: int):
    article = services.find_by_id(id)
    if not article:
        raise NotFound("Artigo não encontrado")
    return article


@app.post('/articles')
def create_article():
    data = request.get_json()
    if not data:
        raise BadRequest('Dados providos não suficientes')
    article = services.create_article(data)
    print(article)
    return serializers.deconstruct_article(article), 200
