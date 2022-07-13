from typing import Any, Dict
from sqlalchemy import Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import declarative_base
from datetime import date

Base = declarative_base()


class Author(Base):
    """ A author of a article in the database.
        They have:
            - a name(String, req);
            - an id(Int, PK); and

        It represents a row in the 'author' table
    """
    __tablename__ = 'tb_author'
    id = Column(Integer, primary_key=True)
    name = Column(String)

    def __repr__(self) -> str:
        return (f"Author(id={self.id}, name={self.name},"
                "articles={self.articles})")

    def as_dict(self) -> Dict[str, Any]:
        return {"id": self.id, "name": self.name}


class Article(Base):
    """ An article on a blog (blog post).
    It has:
        - id (Int, PK)
        - author_id (Int,req,FK) (a reference to the author),
        - created (Date,req)
        - last_update (Date,req)
        - title (String,req)
        - body  (String,req)

    It represents a row in the 'article' table
    """
    __tablename__ = 'tb_article'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    body = Column(String)
    created = Column(Date, default=date.today())
    last_update = Column(Date, default=date.today())
    author_id = Column(Integer, ForeignKey("tb_author.id"))
