from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/articles")
def get_articles():
    return jsonify([{"teste": "umteste"}])


# @app.get(rule="/article/<str:slug>")
# def get_article_by_slug(slug):
#     # query the database for the slug
#     # if there's a database entry with slug
#     # return data as json
#     return NotImplemented
