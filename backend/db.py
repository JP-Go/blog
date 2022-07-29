from typing import Any, List, Optional, Dict
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Article, Base


class ArticleDB:
    """ A class that represent a Article database"""

    def __init__(self, uri: str) -> None:
        self.engine = create_engine(uri, echo=True, future=True)
        self.session = sessionmaker(self.engine)()

    def find_all(self) -> List[Article]:
        with self.session as session:
            list = session.query(Article).all()
            return list

    def find_by_id(self, id: int) -> Optional[Article]:
        with self.session as session:
            article = session.get(Article, ident=id)
            return article

    def insert(self, article: Article) -> Article:
        with self.session as session:
            session.add(article)
            session.flush()
            session.expunge(article)
            session.commit()
            return article

    def delete(self, id: int) -> bool:
        with self.session as session:
            article = session.get(Article, ident=id)
            if not article:
                return False
            session.flush()
            session.delete(article)
            session.commit()
            return True

    def update(self, id: int, data: Dict[str, Any]) -> Article:
        with self.session as session:
            article = session.get(Article, ident=id)
            session.query(Article).filter(Article.id == id).update(data)
            session.flush()
            session.expunge(article)
            return article


article_db = ArticleDB('sqlite:///test.sqlite')
Base.metadata.create_all(article_db.engine)
