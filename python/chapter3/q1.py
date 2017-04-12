import sys
sys.path.insert(0, '../test')
from expect import expect

class MultiStacks:
    def __init__(self, num_stacks, stack_capacity):
        self.num_stacks = num_stacks
        self.stack_capacity = stack_capacity
        self.values = [] # size = num_stacks + stack_capacity
        self.counts = []

        for i in xrange(self.num_stacks * self.stack_capacity):
            self.values.append(None)
        for i in xrange(self.num_stacks):
            self.counts.append(0)

    # Helpers
    def get_start_index(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return stack_num * self.stack_capacity
    
    def get_end_index(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return ((stack_num + 1) * self.stack_capacity) - 1
    
    def get_size(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return self.counts[stack_num]
    
    def is_empty(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return True if self.counts[stack_num] == 0 else False
    
    def is_full(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return True if self.counts[stack_num] == self.stack_capacity else False

    def push(self, stack_num, value):
        if self.is_full(stack_num):
            raise ValueError('stack is full')
        start_index = self.get_start_index(stack_num)
        stack_count = self.get_size(stack_num)
        self.values[start_index+stack_count] = value
        self.counts[stack_num] += 1
    
    def peek(self, stack_num):
        if self.is_empty(stack_num):
            return None
        start_index = self.get_start_index(stack_num)
        stack_count = self.get_size(stack_num)
        return self.values[start_index+stack_count-1]
    
    def pop(self, stack_num):
        if self.is_empty(stack_num):
            return None
        start_index = self.get_start_index(stack_num)
        stack_count = self.get_size(stack_num)
        value = self.values[start_index+stack_count-1]
        self.values[start_index+stack_count-1] = None
        self.counts[stack_num] -= 1
        return value
    
    def get_stack_as_list(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        start_index = self.get_start_index(stack_num)
        end_index = self.get_end_index(stack_num)
        stack_values = []
        for i in xrange(start_index, end_index+1):
            stack_values.append(self.values[i])
        return stack_values

    def print_stack(self, stack_num):
        print self.get_stack_as_list(stack_num)

def main():
    ms = MultiStacks(3, 4)
    expect(ms.is_empty(0), True)
    expect(ms.is_full(0), False)
    ms.push(0, 11)
    ms.push(0, 12)
    ms.push(0, 13)
    ms.push(0, 14)
    expect(ms.get_stack_as_list(0), [11,12,13,14])
    expect(ms.is_full(0), True)
    expect(ms.is_empty(2), True)
    ms.push(2, 15)
    ms.push(2, 20)
    expect(ms.get_stack_as_list(0), [11,12,13,14])
    expect(ms.get_stack_as_list(1), [None, None, None, None])
    expect(ms.get_stack_as_list(2), [15, 20, None, None])
    expect(ms.peek(0), 14)
    expect(ms.peek(1), None)
    expect(ms.peek(2), 20)

    expect(ms.pop(2), 20)
    expect(ms.peek(2), 15)
    expect(ms.pop(2), 15)
    expect(ms.peek(2), None)
    expect(ms.is_empty(2), True)

    expect(ms.pop(0), 14)
    expect(ms.is_full(2), False)
    expect(ms.peek(0), 13)
    ms.push(0, 15)
    expect(ms.peek(0), 15)
    expect(ms.pop(0), 15)
    ms.pop(0)
    ms.pop(0)
    ms.pop(0)
    expect(ms.peek(0), None)
    expect(ms.is_empty(0), True)

if __name__ == '__main__':
    main()
