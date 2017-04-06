import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def removeDuplicates(head):
    node_values = []
    n = head
    prev = None
    while n != None:
        if n.value in node_values:
            prev.next = n.next
        else:
            prev = n
            node_values.append(n.value)
        n = n.next

def main():
    sll = SinglyLinkedList([1,2,3,1,2,3,1,4])
    removeDuplicates(sll.head)
    expect(sll.get_as_list(), [1,2,3,4])

    sll = SinglyLinkedList([1,2,3,4,5])
    removeDuplicates(sll.head)
    expect(sll.get_as_list(), [1,2,3,4,5])

if __name__ == '__main__':
    main()
