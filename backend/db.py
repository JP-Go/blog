from sqlalchemy import create_engine, select
from sqlalchemy.orm.session import sessionmaker
from .models import Author


class AuthorDB:
    """ A class that represent a Author database"""

    def __init__(self, uri: str) -> None:
        self.engine = create_engine(uri, echo=True, future=True)
        self.session = sessionmaker(self.engine)

    def get_all(self):
        with self.session() as session:
            stmt = select(Author)
            return session.scalars(stmt).all()

    def create_author(self, name: str):
        with self.session() as session:
            author = Author(name=name)
            session.add(author)
            session.commit()
