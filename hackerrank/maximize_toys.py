import sys
sys.path.insert(0, '../python/test')
from expect import expect

START_INDEX = 0
WEIGHT_RANGE = 4

def find_count(weights):
    weights = sorted(weights)
    
    second_pointer = START_INDEX
    max_count = 1
    prev_count = 1

    #Still linear b/c only going through each element once
    for i in xrange(len(weights)):
        cur_count = prev_count-1 #went up 1 index (so same count - prev index)
        #start at second_pointer
        while second_pointer < len(weights) and weights[second_pointer] <= weights[i]+WEIGHT_RANGE:
            cur_count += 1
            second_pointer += 1
        max_count = max(cur_count, max_count)
        prev_count = cur_count
        if second_pointer >= len(weights):
            break

    cost = len(weights)-max_count+1 #+1 is for the biggest group (still has cost of 1)
    return cost

def main():
    expect(find_count([2, 3, 3, 3, 3, 10, 11, 20, 21]), 5)
    expect(find_count([2, 4, 5, 6, 7, 7, 7, 8, 10]), 3)
    expect(find_count([1, 2, 3, 17, 10, 18, 19, 20]), 5)

if __name__ == '__main__':
    main()