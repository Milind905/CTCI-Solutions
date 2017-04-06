
class DoublyLinkedListNode:
    def __init__(self, data=None):
        self.value = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self, data_list=[]):
        self.head = None
        self.tail = None
        self.count = 0
        for i in reversed(xrange(len(data_list))):
            self.insert(data_list[i])

    def is_empty(self):
        return self.count == 0

    def insert(self, data):
        if isinstance(data, DoublyLinkedListNode):
            new_node = data
        else:
            new_node = DoublyLinkedListNode(data)

        cur_head = self.head
        new_node.next = cur_head
        self.head = new_node
        self.count += 1

        if self.count == 1:
            self.tail = new_node

    def print_to_console(self):
        cur_node = self.head
        node_list = []
        while cur_node is not None:
            node_list.append(cur_node.value)
            cur_node = cur_node.next
        print node_list




