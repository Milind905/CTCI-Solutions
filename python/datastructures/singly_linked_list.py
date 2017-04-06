
class SinglyLinkedListNode:
    def __init__(self, data=None):
        self.value = data
        self.next = None
    
    def get_as_list(self):
        cur_node = self
        node_list = []
        while cur_node is not None:
            node_list.append(cur_node.value)
            cur_node = cur_node.next
        return node_list

    def print_to_console(self):
        print self.get_as_list()

class SinglyLinkedList:
    def __init__(self, data_list=[]):
        self.head = None
        self.count = 0
        for i in reversed(xrange(len(data_list))):
            self.insert(data_list[i])

    def is_empty(self):
        return self.count == 0

    def insert(self, data):
        if isinstance(data, SinglyLinkedListNode):
            new_node = data
        else:
            new_node = SinglyLinkedListNode(data)
        new_node.next = self.head
        self.head = new_node
        self.count += 1
    
    def insert_at_end(self, data):
        cur_node = self.head
        if cur_node is None:
            return self.insert(data)
        
        if isinstance(data, SinglyLinkedListNode):
            new_node = data
        else:
            new_node = SinglyLinkedListNode(data)
            
        while(cur_node.next is not None):
            cur_node = cur_node.next
        
        cur_node.next = new_node
        new_node.next = None
        self.count += 1

    def getNodeAtIndex(self, k):
        cur_node = self.head
        counter = 0
        for i in xrange(k):
            if(cur_node is None):
                raise ValueError("K is out of range")
            cur_node = cur_node.next
        
        return cur_node
    
    def get_as_list(self):
        cur_node = self.head
        node_list = []
        while cur_node is not None:
            node_list.append(cur_node.value)
            cur_node = cur_node.next
        return node_list

    def print_to_console(self):
        print self.get_as_list()




