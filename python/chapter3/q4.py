import sys
sys.path.insert(0, '../test')
from expect import expect

class MyQueue:
  def __init__(self):
    self.stack1 = []
    self.stack2 = []

  def enqueue(self, value):
    if len(self.stack1) == 0 and len(self.stack2) is not 0:
      self.flip_stack(self.stack2, self.stack1)
    self.stack1.append(value)

  def dequeue(self):
    if len(self.stack1) is not 0 and len(self.stack2) == 0:
      self.flip_stack(self.stack1, self.stack2)
    if len(self.stack2) == 0:
      return None
    else:
      return self.stack2.pop()

  def peek(self):
    if len(self.stack1) is not 0 and len(self.stack2) == 0:
      self.flip_stack(self.stack1, self.stack2)
    if len(self.stack2) == 0:
      return None
    else:
      return self.stack2[len(self.stack2)-1]

  def flip_stack(self, from_stack, to_stack):
    while len(from_stack) is not 0:
      to_stack.append(from_stack.pop())

def main():
  qq = MyQueue()
  qq.enqueue(1)
  expect(qq.peek(), 1)
  expect(qq.dequeue(), 1)
  expect(qq.peek(), None)

  qq.enqueue(1)
  qq.enqueue(2)
  qq.enqueue(3)
  qq.enqueue(4)
  qq.enqueue(5)
  expect(qq.peek(), 1)
  expect(qq.dequeue(), 1)
  expect(qq.peek(), 2)
  expect(qq.dequeue(), 2)
  expect(qq.peek(), 3)
  expect(qq.dequeue(), 3)
  expect(qq.peek(), 4)
  expect(qq.dequeue(), 4)
  expect(qq.peek(), 5)
  expect(qq.dequeue(), 5)
  expect(qq.peek(), None)
  expect(qq.dequeue(), None)

if __name__ == '__main__':
    main()