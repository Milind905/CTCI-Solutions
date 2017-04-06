import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def partition_list(head, node_value):
    p1 = head
    p2 = head

    while(p2.next is not None):
        if p2.next.value < node_value:
            tmp = p2.next
            p2.next = tmp.next
            tmp.next = p1
            p1 = tmp
        else:
            p2 = p2.next
    return p1

def main():
    #Needs proper unit testing.
    sll = SinglyLinkedList([1,7,5,3,8])
    sll.print_to_console()
    new_head = partition_list(sll.head, 5)
    new_head.print_to_console()
    
    print "\n"
    sll = SinglyLinkedList([7,1,5,3,8])
    sll.print_to_console()
    new_head = partition_list(sll.head, 5)
    new_head.print_to_console()

    print "\n"
    sll = SinglyLinkedList([3,5,8,5,10,2,1])
    sll.print_to_console()
    new_head = partition_list(sll.head, 5)
    new_head.print_to_console()

if __name__ == '__main__':
    main()
