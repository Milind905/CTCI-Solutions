import sys
sys.path.insert(0, '../../datastructures')
sys.path.insert(1, '..')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def main():
    sll = SinglyLinkedList([1, 4, 5, 7, 8, 9])
    expect(sll.is_empty(), False)
    expect(sll.count, 6)
    expect(sll.head.value, 1)
    expect(sll.get_as_list(), [1,4,5,7,8,9])
    sll.insert(5)
    sll.insert(SinglyLinkedListNode(12))
    expect(sll.count, 8)
    expect(sll.head.value, 12)
    expect(sll.getNodeAtIndex(1).value, 5)
    expect(sll.getNodeAtIndex(3).value, 4)
    sll.insert_at_end(31)
    expect(sll.count, 9)
    expect(sll.getNodeAtIndex(sll.count-1).value, 31)
    sll.insert_at_end(SinglyLinkedListNode(42))
    expect(sll.count, 10)
    expect(sll.getNodeAtIndex(sll.count-1).value, 42)
    expect(sll.get_as_list(), [12,5,1,4,5,7,8,9,31,42])

    head = sll.head
    expect(head.get_as_list(), [12,5,1,4,5,7,8,9,31,42])
    some_node = sll.getNodeAtIndex(3)
    expect(some_node.get_as_list(), [4,5,7,8,9,31,42])
    
    sll = SinglyLinkedList()
    expect(sll.is_empty(), True)
    expect(sll.count, 0)
    expect(sll.head, None)
    expect(sll.get_as_list(), [])

if __name__ == '__main__':
    main()
    