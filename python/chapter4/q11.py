import sys
import random
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node_helpers import print_binary_tree
from expect import expect

class ModifiedBinaryNode():
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
        self.left_count = 0
        self.right_count = 0

class BinaryTree():
    def __init__(self, root=None):
        self.root = root

    def get_random_node(self):
        return self.__get_random_node(self.root)
    
    def __get_random_node(self, node):
        total_count = node.left_count + node.right_count + 1
        ran_num = random.randint(1, total_count)
        if(ran_num == total_count):
            return node
        elif(ran_num > node.left_count):
            return self.__get_random_node(node.right)
        else:
            return self.__get_random_node(node.left)

    def insert(self, value):
        if not isinstance(value, ModifiedBinaryNode):
            node = ModifiedBinaryNode(value)
        else:
            node = value

        if self.root is None:
            self.root = node
        else:
            self.__insert(self.root, node)

    def __insert(self, cur_node, node):
        if node.value > cur_node.value:
            cur_node.right_count += 1
            if cur_node.right is None:
                cur_node.right = node
            else:
                self.__insert(cur_node.right, node)
        else:
            cur_node.left_count += 1
            if cur_node.left is None:
                cur_node.left = node
            else:
                self.__insert(cur_node.left, node)
    
    def find(self, value):
        cur_node = self.root
        while cur_node is not None:
            if value == cur_node.value:
                return cur_node
            elif value > cur_node.value:
                cur_node = cur_node.right
            else:
                cur_node = cur_node.left
        return None

def main():
    bt = BinaryTree()
    bt.insert(ModifiedBinaryNode(20))
    bt.insert(ModifiedBinaryNode(10))
    bt.insert(ModifiedBinaryNode(30))
    bt.insert(ModifiedBinaryNode(5))
    bt.insert(ModifiedBinaryNode(15))
    bt.insert(ModifiedBinaryNode(40))
    bt.insert(ModifiedBinaryNode(35))
    expect(bt.find(30).value, bt.root.right.value)
    expect(bt.find(35).value, bt.root.right.right.left.value)
    expect(bt.find(50), None)

    #TODO: possible to expect test this? probably not
    print bt.get_random_node().value
    print bt.get_random_node().value
    print bt.get_random_node().value

if __name__ == '__main__':
    main()
