import sys
sys.path.insert(0, '../test')
from expect import expect

class MinStack:
    def __init__(self):
        self.list = [] # Not accessible
        self.top = None
        self.minStack = [] # Not accessible
        self.min = None
    
    def push(self, value):
        self.list.append(value)
        self.top = value
        
        if self.min is None:
            self.minStack.append(value)
            self.min = value
        elif value < self.min:
            self.minStack.append(value)
            self.min = value
    
    def pop(self):
        value = self.list.pop()
        if value == self.min:
            self.minStack.pop()
            if len(self.minStack) > 0:
                self.min = self.minStack[len(self.minStack)-1]
            else:
                self.min = None
        return value
    
    def getMin(self):
        return self.min

def main():
    ms = MinStack()
    ms.push(3)
    ms.push(5)
    ms.push(7)
    ms.push(1)
    expect(ms.getMin(), 1)
    ms.pop()
    expect(ms.getMin(), 3)
    ms.pop()
    ms.pop()
    expect(ms.getMin(), 3)
    ms.pop()
    expect(ms.getMin(), None)
    
if __name__ == '__main__':
    main()
