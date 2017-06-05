import sys
sys.path.insert(0, '../test')
from expect import expect

def find_magic_index(arr):
    return binary_search(0, len(arr)-1, arr)

def binary_search(low, high, arr):
    if high < low or low < 0 or high >= len(arr):
        return -1
    
    mid = (low + high) // 2
    if arr[mid] == mid:
        return mid
    
    left_index = min(mid-1, arr[mid])
    left = binary_search(0, left_index, arr)
    if left > -1:
        return left
    
    right_index = max(mid+1, arr[mid])
    right = binary_search(right_index, high, arr)
    return right

def main():
    expect(find_magic_index([-1,1,3,4,5,7,8,9]), 1)
    expect(find_magic_index([3,5,7,8,9,10,11,12]), -1)
    expect(find_magic_index([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]), 7)

if __name__ == '__main__':
    main()