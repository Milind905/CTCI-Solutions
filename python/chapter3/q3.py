import sys
sys.path.insert(0, '../test')
from expect import expect

#Incomplete - Implement popAt
class StackOfPlates:
    def __init__ (self, max_height):
        self.max_height = max_height  
        self.stack_array = []
        self.cur_stack = []
        self.stack_array.append(self.cur_stack)

    def push(self, value):
        if self.is_cur_stack_full():
            self.cur_stack = []
            self.stack_array.append(self.cur_stack)
        self.cur_stack.append(value)    
    
    def peek(self):
        if len(self.cur_stack) == 0:
            return None
        else:
            return self.cur_stack[len(self.cur_stack)-1]
    
    def pop_at(self, index):
        stack_index = index // self.max_height
        index_inside_stack = index % self.max_height
        value = self.stack_array[stack_index][index_inside_stack]
        self.stack_array[stack_index][index_inside_stack] = None
        self.rebuild_stack()
        return value
    
    def rebuild_stack(self):
        #TODO: This is pretty bad.
        self.stack_array.reverse()
        prev_stack_array = self.stack_array
        self.stack_array = []
        self.cur_stack = []
        self.stack_array.append(self.cur_stack)
        while len(prev_stack_array) is not 0:
            prev_stack = prev_stack_array.pop()
            while len(prev_stack) is not 0:
                value = prev_stack.pop()
                if value is not None:
                    self.push(value)

    def pop(self):
        value = self.cur_stack.pop()
        if self.is_cur_stack_empty():
            self.stack_array.pop()
            if len(self.stack_array) == 0:
                self.cur_stack = []
                self.stack_array.append(self.cur_stack)
            else:
                self.cur_stack = self.stack_array[len(self.stack_array)-1]
        return value
    
    def is_cur_stack_empty(self):
        return True if len(self.cur_stack) == 0 else False

    def is_cur_stack_full(self):
        return True if len(self.cur_stack) == self.max_height else False
    
def main():
    sop = StackOfPlates(2)
    sop.push(1)
    sop.push(2)
    sop.push(3)
    sop.push(4)
    sop.push(5)
    expect(sop.peek(), 5)
    sop.pop()
    expect(sop.peek(), 4)
    sop.pop()
    expect(sop.peek(), 3)
    sop.pop()
    expect(sop.peek(), 2)
    sop.pop()
    expect(sop.peek(), 1)
    sop.pop()
    expect(sop.peek(), None)

    sop = StackOfPlates(2)
    sop.push(1)
    sop.push(2)
    sop.push(3)
    sop.push(4)
    sop.push(5)
    expect(sop.pop_at(2), 3)
    expect(sop.pop_at(2), 4)
    expect(sop.pop_at(0), 1)
    expect(sop.pop_at(1), 5)
    expect(sop.pop_at(0), 2)

if __name__ == '__main__':
    main()
