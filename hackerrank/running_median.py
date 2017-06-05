import sys
import heapq

class MaxHeapObj(object):
  def __init__(self,val): self.val = val
  def __lt__(self,other): return self.val > other.val
  def __eq__(self,other): return self.val == other.val
  def __str__(self): return str(self.val)

class MinHeap(object):
  def __init__(self): self.h = []
  def heappush(self,x): heapq.heappush(self.h,x)
  def heappop(self): return heapq.heappop(self.h)
  def __getitem__(self,i): return self.h[i]
  def __len__(self): return len(self.h)

class MaxHeap(MinHeap):
  def heappush(self,x): heapq.heappush(self.h,MaxHeapObj(x))
  def heappop(self): return heapq.heappop(self.h).val
  def __getitem__(self,i): return self.h[i].val

def get_median(nums):
    global minh
    global maxh
    
    if len(nums) == 1:
        minh.heappush(nums[0])
        return float(minh[0])

    
    if len(minh) == len(maxh):
        insert_into_min_heap(nums[-1])
    elif len(minh)-len(maxh) == 1:
        insert_into_max_heap(nums[-1])
    else:
        print "Shouldn't ever get here"
    
    if len(minh) == len(maxh):
        return (minh[0] + maxh[0]) / 2.0
    elif len(minh)-len(maxh) == 1:
        return float(minh[0])
    else:
        print "Shouldn't ever get here"

def insert_into_min_heap(num):
    global minh
    global maxh

    if num >= maxh[0]:
        minh.heappush(num)
    else:
        swap_into_min(num)

def insert_into_max_heap(num):
    global minh
    global maxh

    if num <= minh[0]:
        maxh.heappush(num)
    else:
        swap_into_max(num)

def swap_into_min(num):
    global minh
    global maxh

    minh.heappush(maxh.heappop())
    maxh.heappush(num)


def swap_into_max(num):
    global minh
    global maxh

    maxh.heappush(minh.heappop())
    minh.heappush(num)

minh = MinHeap()
maxh = MaxHeap()

def main():
    n = sys.argv[1]
    items = sys.argv[2].split(',')
    a = []
    for item in items:
        a.append(int(item))
        print get_median(a)

if __name__ == '__main__':
    main()