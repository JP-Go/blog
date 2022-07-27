from typing import Any, Dict, List, Optional
from .models import Article
from .db import article_db
from .serializers import construct_article


def find_all() -> List[Article]:
    return article_db.find_all()


def find_by_id(id: int) -> Optional[Article]:
    return article_db.find_by_id(id)


def create_article(data: Dict[str, Any]) -> Article:
    new_article = construct_article(data)
    return article_db.insert_article(new_article)
