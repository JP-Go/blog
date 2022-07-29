from flask import Flask, request, jsonify
from werkzeug.exceptions import BadRequest, NotFound
from . import services, serializers

app = Flask(__name__)


@app.get('/')
def index():
    return jsonify({"Hello": "World"})


@app.get('/articles')
def get_articles():
    articles = services.find_all()
    list_of_articles = list(
        map(lambda x: serializers.deconstruct_article(x), articles))
    return jsonify(list_of_articles)


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
        raise BadRequest(
            'Dados providos não suficientes para criação de novo artigo')
    article = services.create_article(data)
    if not article:
        raise BadRequest(
            'Dados providos não suficientes para criação de novo artigo')
    return serializers.deconstruct_article(article), 200


@app.delete('/articles/<int:id>')
def delete_article(id: int):
    success = services.remove_article(id)
    if not success:
        raise NotFound("Artigo a ser deletado não existe na base de dados")
    return {}, 204  # NO CONTENT


@app.put('/articles/<int:id>')
def update_article(id: int):
    data = request.get_json()
    if not data:
        raise BadRequest("Dados para atualização não enviados")
    article = services.update_article(id, data)
    if not article:
        raise NotFound("Artigo não encontrado")
    return serializers.deconstruct_article(article), 200  # NO CONTENT
