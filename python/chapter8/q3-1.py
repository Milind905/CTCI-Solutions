import sys
sys.path.insert(0, '../test')
from expect import expect

def find_magic_index(arr):
    return binary_search(0, len(arr)-1, arr)

def binary_search(low, high, arr):
    mid = (low + high) // 2
    if arr[mid] == mid:
        return mid
    if low >= high:
        return -1
    
    if arr[mid] < mid:
        return binary_search(mid+1, high, arr)
    if arr[mid] > mid:
        return binary_search(low, mid-1, arr)

def main():
    expect(find_magic_index([-1,1,3,4,5,7,8,9]), 1)
    expect(find_magic_index([3,5,7,8,9,10,11,12]), -1)
    expect(find_magic_index([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]), 7)

if __name__ == '__main__':
    main()