# my_var: str = "hello"
# another_var: int = 2
    # making it clear what variable type it is

# tuples are immutable
    # list = ("homework", "project")

# hash set
    # list = set()
    # list.add('apples')
    # list.add(2)

# hash map {k : v}
    # stuff = {}
    # stuff['Aiden'] = 5

# functions
    # def name ():
    #   ...

# classes
    # def __init__(self, first_name):
    #   self.first_name = first_name
import requests
import json

class Catfacts:
    def __init__(self, cat_name):
        self.cat_name = cat_name

    def getCatBreed(self, n):
        result = requests.get('https://catfact.ninja/breeds')
        result_nth_cat = list(result.json().values())[1][n]
        return list(result_nth_cat.values())[0]

ex = Catfacts('meow')
print(ex.getCatBreed(4))