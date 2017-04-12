import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def sum_lists(head1, head2):
    head1 = reverse_list(head1) 
    head2 = reverse_list(head2)

    p1 = head1
    p2 = head2
    carryover = 0
    sum_linked_list = SinglyLinkedList()

    while p1 is not None or p2 is not None:
        sum = 0
        
        if p1 is not None:
            sum += p1.value
            p1 = p1.next
        if p2 is not None:
            sum += p2.value
            p2 = p2.next
        sum += carryover
        carryover = 1 if sum >= 10 else 0

        sum_linked_list.insert_at_end(sum % 10)
    
    if carryover is not 0:
        sum_linked_list.insert_at_end(carryover)
        carryover = 0
    
    return reverse_list(sum_linked_list.head)

#In place -> O(1) space, O(N) run time
def reverse_list(head):
    prev = None
    current = head
    while current is not None:
        next = current.next
        current.next = prev
        prev = current
        current = next
    return prev

def main():
    sll1 = SinglyLinkedList([5,9,2])
    sll2 = SinglyLinkedList([7,1,6])
    sum_head = sum_lists(sll1.head, sll2.head)
    expect(sum_head.get_as_list(), [1,3,0,8])

    sll1 = SinglyLinkedList([7,8,3,2])
    sll2 = SinglyLinkedList([5,4,1])
    sum_head = sum_lists(sll1.head, sll2.head)
    expect(sum_head.get_as_list(), [8,3,7,3])

    sll1 = SinglyLinkedList([7,8,3,2])
    sll2 = SinglyLinkedList([5,4,1,7,8])
    sum_head = sum_lists(sll1.head, sll2.head)
    expect(sum_head.get_as_list(), [6,2,0,1,0])

if __name__ == '__main__':
    main()
