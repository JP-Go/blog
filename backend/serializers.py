from .models import Author


def serializeAuthor(author: Author):
    author_dict = {"name": author.name, "id": author.id}
    return author_dict
