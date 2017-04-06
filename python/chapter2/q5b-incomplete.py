#Incomplete!

import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

# doesn't work!
# one solution is to simply reverse these lists and then do the same thing as before
# solution two is to do padding but the function after must be recursive
def sum_lists(head1, head2):
    count1 = count_list(head1)
    count2 = count_list(head2)
   
    if count1 < count2:
        head1 = pad_list(head1, count2-count1)
    else:
        head2 = pad_list(head2, count1-count2)

    p1 = head1
    p2 = head2
    carry_before = 0
    sum_linked_list = SinglyLinkedList()
    while p1 is not None or p2 is not None:
        sum = 0

        if p1 is not None:
            sum += p1.value
            p1 = p1.next
        if p2 is not None:
            sum += p2.value
            p2 = p2.next
        
        carrybefore = 1 if sum >= 10 else 0
        prev_node = sum_linked_list.getNodeAtIndex(sum_linked_list.count-1)

        sum_linked_list.insert_at_end(sum % 10)
    
    if carryover is not 0:
        sum_linked_list.insert_at_end(carryover)
        carryover = 0
    
    return sum_linked_list


def count_list(head):
    counter = 0
    cur_node = head
    while cur_node is not None:
        counter += 1
        cur_node = cur_node.next
    return counter

def pad_list(head, k):
    for i in xrange(k):
        tmp = SinglyLinkedListNode(0)
        tmp.next = head
        head = tmp
    return head

def main():
    sll1 = SinglyLinkedList([7,8,3,2])
    sll2 = SinglyLinkedList([5,1,1])
    sum_sll = sum_lists(sll1.head, sll2.head)
    sum_sll.print_to_console()

if __name__ == '__main__':
    main()
