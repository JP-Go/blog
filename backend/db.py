from typing import List, Optional
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Article


class ArticleDB:
    """ A class that represent a Article database"""

    def __init__(self, uri: str) -> None:
        self.engine = create_engine(uri, echo=True, future=True)
        self.session = sessionmaker(self.engine)

    def find_all(self) -> List[Article]:
        with self.session() as session:
            list = session.query(Article).all()
            return list

    def find_by_id(self, id: int) -> Optional[Article]:
        with self.session() as session:
            article = session.get(Article, ident=id)
            return article

    def insert_article(self, article: Article):
        with self.session() as session:
            session.add(article)
            session.commit()
            return Article(id=article.id,
                           title=article.title,
                           author_name=article.author_name,
                           created=article.created,
                           last_update=article.last_update,
                           body=article.body)
