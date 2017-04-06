# Incomplete.
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
    
    def is_empty(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return False if self.counts[stack_num] > 0 else True
    
    def is_full(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return False if self.counts[stack_num] < self.stack_capacity else True

    def push(self, stack_num, value):
        if self.is_full(stack_num):
            raise ValueError('stack is full')
        start_index = self.get_start_index(stack_num)
        size = self.get_size(stack_num)
        self.values[start_index+size] = value
        self.counts[stack_num] += 1
    
    def peek(self, stack_num):
        start_index = self.get_start_index(stack_num)
        size = self.get_size(stack_num)
        print start_index, size
        return self.values[start_index+size-1]
    
    def pop(self, stack_num):
        start_index = self.get_start_index(stack_num)
        size = self.get_size(stack_num)
        value = self.values[start_index+size-1]
        self.values[start_index+size-1] = None
        self.counts[stack_num] -= 1
        return value
        
    def get_start_index(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return stack_num * self.stack_capacity
    
    def get_end_index(self, stack_num):
        return self.get_start_index(stack_num)+self.counts[stack_num]-1

    def get_size(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        return self.counts[stack_num]
    
    def print_stack(self, stack_num):
        if stack_num < 0 or stack_num >= self.num_stacks:
            raise ValueError('stack_num is invalid')
        start_index = self.get_start_index(stack_num)
        end_index = self.get_end_index(stack_num)
        stack_values = []
        for i in xrange(end_index, start_index-1, -1):
            stack_values.append(self.values[i])
        
        print stack_values

def main():
    ms = MultiStacks(3, 4)
    print(ms.is_empty(0))
    print(ms.is_full(0))
    ms.push(0, 11)
    ms.push(0, 12)
    ms.push(0, 13)
    ms.push(0, 14)
    ms.print_stack(0)
    print(ms.is_full(0))
    ms.push(2, 15)
    ms.push(2, 20)
    ms.print_stack(2)
    ms.print_stack(1)
    ms.print_stack(0)
    print(ms.peek(2))
    print(ms.peek(1))
    print(ms.peek(0))

if __name__ == '__main__':
    main()
