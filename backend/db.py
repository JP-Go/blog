from typing import List, Optional
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Article


class ArticleDB:
    """ A class that represent a Article database"""

    def __init__(self, uri: str) -> None:
        self.engine = create_engine(uri, echo=True, future=True)
        self.session = sessionmaker(self.engine)

    def get_all(self) -> List[Article]:
        with self.session() as session:
            list = session.query(Article).all()
            return list

    def find_by_id(self, id: int) -> Optional[Article]:
        with self.session() as session:
            author = session.get(Article, ident=id)
            return author

    def create_article(self, title: str, content: str, author_name: str):
        pass
