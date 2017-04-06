import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def is_list_palindrome(head):
    list_len = count_list(head)
    stack = []
    cur_node = head

    for i in xrange(0, list_len//2):
        stack.append(cur_node)
        cur_node = cur_node.next

    if list_len%2 == 1:
        cur_node = cur_node.next

    while cur_node != None:
        stack_value = stack.pop().value
        if cur_node.value != stack_value:
            return False
        cur_node = cur_node.next
    
    if len(stack) > 0:
        return False
    else:
        return True

def count_list(head):
    counter = 0
    cur_node = head
    while cur_node is not None:
        counter += 1
        cur_node = cur_node.next
    return counter

def main():
    sll = SinglyLinkedList([7,8,3,2,3,8,7])
    expect(is_list_palindrome(sll.head), True)

    sll = SinglyLinkedList([1,2,3,3,2,1])
    expect(is_list_palindrome(sll.head), True)

    sll = SinglyLinkedList([1,2,3,4,2,3,1])
    expect(is_list_palindrome(sll.head), False)

if __name__ == '__main__':
    main()
