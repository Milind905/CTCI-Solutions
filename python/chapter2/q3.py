import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def deleteNode(node):
    next_node = node.next

    node.value = next_node.value
    node.next = next_node.next

def main():
    sll = SinglyLinkedList([1,2,3,4,5,6])
    deleteNode(sll.getNodeAtIndex(2))
    expect(sll.get_as_list(), [1,2,4,5,6])

    sll = SinglyLinkedList([1,2,3,4,5,6])
    deleteNode(sll.getNodeAtIndex(0))
    expect(sll.get_as_list(), [2,3,4,5,6])

if __name__ == '__main__':
    main()
