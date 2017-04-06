import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def intersection(head1, head2):
    count1 = count_list(head1)
    count2 = count_list(head2)

    # See if tails are the same
    p1 = head1
    p2 = head2
    while p1.next is not None:
        p1 = p1.next
    while p2.next is not None:
        p2 = p2.next
    if p1.value != p2.value:
        return [False, None]
    
    # Move pointer of smaller list up to that tails will align
    p1 = head1
    p2 = head2
    if(count1 < count2):
        diff = count2-count1
        for i in xrange(diff):
            p2 = p2.next
    else:
        diff = count1-count2
        for i in xrange(diff):
            p1 = p1.next

    # Find intersection
    while p1 != None:
        if p1.value == p2.value:
            return [True, p1.value]
        p1 = p1.next
        p2 = p2.next
        
    return [False, None]

def count_list(head):
    counter = 0
    cur_node = head
    while cur_node is not None:
        counter += 1
        cur_node = cur_node.next
    return counter

def main():
    sll1 = SinglyLinkedList([1,2,3,4,5,6,7])
    sll2 = SinglyLinkedList([8,9,5,6,7])
    expect(intersection(sll1.head, sll2.head), [True, 5])

    sll1 = SinglyLinkedList([1,2,3,4,5,6,7])
    sll2 = SinglyLinkedList([8,9,10,11,12,13])
    expect(intersection(sll1.head, sll2.head), [False, None])

    sll1 = SinglyLinkedList([1,2,3,4,5,6,7])
    sll2 = SinglyLinkedList([1,2,3,4,5,6,7])
    expect(intersection(sll1.head, sll2.head), [True, 1])

    sll1 = SinglyLinkedList([1,2,3,4,5,6,7])
    sll2 = SinglyLinkedList([8,9,10,11,12,13,14,15,7])
    expect(intersection(sll1.head, sll2.head), [True, 7])

if __name__ == '__main__':
    main()
