import sys
sys.path.insert(0, '../test')
from expect import expect
from collections import deque

class Animal:
    CAT = 1,
    DOG = 2

class AnimalNode:
    def __init__(self, id, animal_type):
        self.id = id #Should ideally auto-increment
        self.type = animal_type

class AnimalShelter:
    def __init__(self):
        self.dog_queue = deque()
        self.cat_queue = deque()

    def enqueue(self, animal):
        if not isinstance(animal, AnimalNode):
            raise ValueError('Not a valid AnimalNode')

        if animal.type == Animal.CAT:
            self.cat_queue.append(animal)
        elif animal.type == Animal.DOG:
            self.dog_queue.append(animal)
        else:
            raise ValueError('This shelter takes only dogs and cats!')

    def dequeue_any(self):
        if len(self.cat_queue) is 0 and len(self.dog_queue) is 0:
            return None
        elif len(self.cat_queue) is 0:
            return self.dequeue_dog()
        elif len(self.dog_queue) is 0:
            return self.dequeue_cat()

        first_cat = self.peek(self.cat_queue)
        first_dog = self.peek(self.dog_queue)
        if first_cat.id > first_dog.id:
            return self.dequeue_dog()
        else:
            return self.dequeue_cat()

    def dequeue_cat(self):
        if len(self.cat_queue) is 0:
            return None
        else:
            return self.cat_queue.pop()

    def dequeue_dog(self):
        if len(self.dog_queue) is 0:
            return None
        else:
            return self.dog_queue.pop()

    def peek(self, queue):
        if len(queue) is 0:
            return None
        else:
            node = queue.popleft()
            queue.append(node)
            return node

def main():
    shelter = AnimalShelter()
    shelter.enqueue(AnimalNode(1, Animal.CAT))
    shelter.enqueue(AnimalNode(2, Animal.DOG))
    expect(shelter.peek(shelter.cat_queue).id, 1)
    expect(shelter.peek(shelter.dog_queue).id, 2)
    expect(shelter.dequeue_any().id, 1)
    expect(shelter.peek(shelter.cat_queue), None)
    expect(shelter.dequeue_any().id, 2)
    expect(shelter.peek(shelter.dog_queue), None)

    shelter = AnimalShelter()
    shelter.enqueue(AnimalNode(1, Animal.CAT))
    shelter.enqueue(AnimalNode(2, Animal.DOG))
    shelter.enqueue(AnimalNode(3, Animal.DOG))
    shelter.enqueue(AnimalNode(4, Animal.DOG))
    shelter.enqueue(AnimalNode(5, Animal.CAT))
    expect(shelter.peek(shelter.cat_queue).id, 1)
    expect(shelter.peek(shelter.dog_queue).id, 2)
    expect(shelter.dequeue_cat().id, 1)
    expect(shelter.dequeue_dog().id, 2)
    expect(shelter.dequeue_any().id, 3)
    expect(shelter.dequeue_cat().id, 5)
    expect(shelter.dequeue_cat(), None)
    expect(shelter.dequeue_dog().id, 4)
    expect(shelter.dequeue_any(), None)

if __name__ == '__main__':
    main()
