from typing import Any, Dict
from flask.json import JSONDecoder
from .models import Article


def serializeArticle(json: str) -> Dict[str, Any]:
    data = JSONDecoder().decode(json)
    return data


def deserializeArticle(Article: Article) -> Dict[str, Any]:
    return {
        'id': Article.id,
        'title': Article.title,
        'author_name': Article.author_name,
        'created': Article.created,
        'last_updated': Article.last_updated,
        'body': Article.body
    }
