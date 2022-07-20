from flask import Flask, request, jsonify
from .db import AuthorDB
from .models import Base
from . import serializers

app = Flask(__name__)
author_db = AuthorDB('sqlite:///test.sqlite')
Base.metadata.create_all(author_db.engine)


@app.get('/')
def index():
    return "<p>Hello</p>"


@app.get('/authors')
def get_authors():
    authors = author_db.get_all()
    authors_dict = list(map(lambda x: serializers.serializeAuthor(x), authors))
    return jsonify(authors_dict), 200


@app.post('/authors')
def create_author():
    # get the request body
    body = request.form
    # if the body doesn't have the name
    if not body.get('name'):
        # return 401
        return {"error": "Property 'name' not provided"}, 401
    # Else, create a new author in the  database
    author = author_db.create_author(body["name"])
    # return the newly created author
    return jsonify(serializers.serializeAuthor(author))
