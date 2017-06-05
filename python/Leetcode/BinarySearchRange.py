
def searchRange(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    indicies = set()
    low = None
    high = None
    foundAt = BinarySearch(nums, 0, len(nums)-1, target, low, high) != -1


    

def BinarySearch(arr, min, max, target, low, high):
    if min > max:
        return -1
    
    mid = (min + max) // 2
    if arr[mid] == target:
        if mid < low:
            low = mid
            if mid-1 > 0 and arr[mid-1] == arr[mid]:
                low = BinarySearch(arr, min, mid-1, target, low, high)
        if mid > high:
            high = mid
            if mid+1 < len(arr) and arr[mid+1] == arr[mid]:
                high = BinarySearch(arr, mid+1, max, target, low, high)
        return
    elif arr[mid] > target:
        return BinarySearch(arr, min, mid-1, target, low, high)
    else:
        return BinarySearch(arr, mid+1, max, target, low, high)


def main():
    print 'hello world'
    print searchRange([5,7,7,8,8,10], 8)

if __name__ == '__main__':
    main()