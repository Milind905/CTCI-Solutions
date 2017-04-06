import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')
from singly_linked_list import SinglyLinkedListNode, SinglyLinkedList
from expect import expect

def removeDuplicates(head):
    if(head is None or head.next is None):
        return

    current = head
    while(current != None):
        prev = current
        runner = current.next
        while(runner != None):
            if(current.value == runner.value):
                prev.next = runner.next
            else:
                prev = runner
            runner = runner.next
        current = current.next

def main():
    sll = SinglyLinkedList([1,2,1,1,1,3,2])
    removeDuplicates(sll.head)
    expect(sll.get_as_list(), [1,2,3])

if __name__ == '__main__':
    main()
