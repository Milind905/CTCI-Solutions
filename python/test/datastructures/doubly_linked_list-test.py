import sys
sys.path.insert(0, '../../datastructures')
sys.path.insert(1, '..')
from doubly_linked_list import DoublyLinkedListNode, DoublyLinkedList
from expect import expect

def main():
    dll = DoublyLinkedList([1, 4, 5, 7, 8, 9])
    expect(dll.is_empty(), False)
    expect(dll.tail.value, 9)
    expect(dll.head.value, 1)
    expect(dll.count, 6)
    dll.insert(5)
    expect(dll.tail.value, 9)
    expect(dll.head.value, 5)
    expect(dll.count, 7)
    dll.insert(DoublyLinkedListNode(12))
    expect(dll.tail.value, 9)
    expect(dll.head.value, 12)
    expect(dll.count, 8)

    dll = DoublyLinkedList()
    expect(dll.is_empty(), True)
    expect(dll.count, 0)
    expect(dll.tail, None)
    expect(dll.head, None)

if __name__ == '__main__':
    main()
    