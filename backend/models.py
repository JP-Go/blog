from sqlalchemy import Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import declarative_base
from datetime import date

Base = declarative_base()


class Article(Base):
    """ An article on a blog (blog post).
    It has:
        - id (Int, PK)
        - author_name (String,req)
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
    author_name = Column(String)
