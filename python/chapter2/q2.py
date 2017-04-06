import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def kth_to_last(head, k):
    counter = 0
    pointer = head
    runner = head

    if k <= 0:
        raise ValueError('K is larger than the length of the linked list')

    while counter < k:
        if runner is None:
            raise ValueError('K is larger than the length of the linked list')
        runner = runner.next
        counter += 1
    while runner is not None:
        pointer = pointer.next
        runner = runner.next
    
    return pointer.value

def main():
    sll = SinglyLinkedList([1,2,3,4,5,6,7,8,9])
    expect(kth_to_last(sll.head, 1), 9)
    expect(kth_to_last(sll.head, 3), 7)
    expect(kth_to_last(sll.head, 9), 1)
    

if __name__ == '__main__':
    main()
