from flask.json import JSONDecoder
from .models import Author


def serializeAuthor(author: Author):
    author_dict = {"name": author.name, "id": author.id}
    return author_dict


def deserializeAuthor(authorJson: str):
    decoder = JSONDecoder()
    return decoder.decode(authorJson)
