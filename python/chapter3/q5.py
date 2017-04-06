import sys
sys.path.insert(0, '../test')
from expect import expect

class SortedStack:
    def __init__(self):
        self.values = []
        self.count = 0
    
    def peek(self):
        if not self.is_empty():
            return self.values[len(self.values)-1]
        else:
            return None
        
    def is_empty(self):
        return True if self.count <= 0 else False
    
    def push(self, value):
        temp_stack = []
        while self.peek() is not None and self.peek() < value:
            temp_stack.append(self.pop())
        self.values.append(value)
        while len(temp_stack) > 0:
            self.values.append(temp_stack.pop())
            self.count += 1
        self.count += 1
    
    def print_stack(self):
        print self.values

    def pop(self):
        if not self.is_empty():
            self.count -= 1
            return self.values.pop()
        else:
            raise ValueError('Stack is empty')
            
def main():
    ss = SortedStack()
    expect(ss.is_empty(), True)
    expect(ss.peek(), None)
    ss.push(5)
    ss.push(10)
    expect(ss.values, [10,5])
    expect(ss.peek(), 5)
    ss.push(1)
    expect(ss.values, [10,5,1])
    expect(ss.peek(), 1)
    ss.push(12)
    expect(ss.values, [12,10,5,1])
    expect(ss.peek(), 1)

if __name__ == '__main__':
    main()
