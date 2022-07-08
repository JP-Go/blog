from dataclasses import dataclass
from datetime import datetime


@dataclass()
class ArticleMetadata:
    id:int
    slug:str
    title:str
    last_updated:datetime

@dataclass(order=True)
class Article:
    meta:ArticleMetadata
    content: str
