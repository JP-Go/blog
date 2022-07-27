from typing import Dict
from .models import Article
from datetime import datetime


def construct_article(data: Dict[str, str]):
    if not set(['title', 'author_name', 'body']).issubset(data):
        raise ValueError('Required fields not provided')

    return Article(title=data['title'],
                   body=data['body'],
                   author_name=data['author_name'],
                   created=datetime.now(),
                   last_update=datetime.now())


def deconstruct_article(article: Article):
    return {
        'id': article.id,
        'title': article.title,
        'body': article.body,
        'author_name': article.author_name,
        'created': article.created,
        'last_update': article.last_update
    }
