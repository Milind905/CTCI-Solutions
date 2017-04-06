import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def is_circular(head):
    node_values = []
    cur_node = head

    while cur_node is not None:
        if cur_node.value in node_values:
            return [True, cur_node.value]
        else:
            node_values.append(cur_node.value)
        cur_node = cur_node.next
    
    return [False, None]

def main():
    sll = SinglyLinkedList([1,2,3,4,5])
    expect(is_circular(sll.head), [False, None])

    sll = SinglyLinkedList([1,2,3,4,5,2,3])
    expect(is_circular(sll.head), [True, 2])

if __name__ == '__main__':
    main()
