from typing import Any, Dict, Optional
from .models import Article
from datetime import datetime


# TODO: Handle this error better
def construct_article(data: Dict[str, str]) -> Optional[Article]:
    if not set(['title', 'author_name', 'body']).issubset(data):
        return None

    return Article(title=data['title'],
                   body=data['body'],
                   author_name=data['author_name'],
                   created=datetime.now(),
                   last_update=datetime.now())


def deconstruct_article(article: Article) -> Dict[str, Any]:
    return {
        'id': article.id,
        'title': article.title,
        'body': article.body,
        'author_name': article.author_name,
        'created': article.created,
        'last_update': article.last_update
    }
