from os import PathLike
import sqlite3


def connect_to_database(path: PathLike):
    return sqlite3.connect(path, 3000)
