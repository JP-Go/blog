from flask import Flask, jsonify
from .db import AuthorDB
from .models import Base

app = Flask(__name__)
author_db = AuthorDB('sqlite:///test.sqlite')
Base.metadata.create_all(author_db.engine)


@app.get('/')
def index():
    return "<p>Hello</p>"


@app.get('/authors')
def get_authors():
    authors = author_db.get_all()
    return jsonify(list(map(lambda x: x.as_dict(), authors)))
