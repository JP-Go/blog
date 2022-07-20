from typing import Any, Dict
from .models import Article


def article_to_dict(Article: Article) -> Dict[str, Any]:
    return {
        'id': Article.id,
        'title': Article.title,
        'author_name': Article.author_name,
        'created': Article.created,
        'last_update': Article.last_update,
        'body': Article.body
    }


def dict_to_article(dict: Dict[str, Any]) -> Article:
    return Article(title=dict['title'],
                   author_name=dict['author_name'],
                   body=dict['body'])
