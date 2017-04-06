#Incomplete - Too boring
from collections import deque
from enum import enum

class Animal(Enum):
    CAT = 1,
    DOG = 2

class AnimalNode:
    def __init__(self, id, a_type):
        self.id = id
        self.type = a_type

class AnimalShelter:
    def __init__(self):
        dogQueue = deque()
        catQueue = deque()

    def enqueue(self, animal):
        if animal.type == Animal.CAT:
            catQueue.appendleft(animal)



def main():

if __name__ == '__main__':
    main()
