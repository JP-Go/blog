from typing import Any, Dict, List, Optional

from werkzeug.exceptions import NotFound
from .models import Article
from .db import article_db
from .serializers import construct_article
from datetime import datetime


def find_all() -> List[Article]:
    return article_db.find_all()


def find_by_id(id: int) -> Optional[Article]:
    return article_db.find_by_id(id)


def create_article(data: Dict[str, Any]) -> Optional[Article]:
    new_article = construct_article(data)
    if not new_article:
        return None
    return article_db.insert(new_article)


def remove_article(id: int) -> bool:
    success = article_db.delete(id)
    return success


def update_article(id: int, data: Dict[str, Any]) -> Optional[Article]:
    # Check if article exists
    article = find_by_id(id)
    if not article:
        return None
    if data.get("id"):
        del data["id"]
    if data.get("created"):
        del data["created"]
    if data.get("last_update"):
        del data["last_update"]
    data["last_update"] = datetime.now()

    # Update article metadata
    new_article = article_db.update(id, data)
    return new_article
