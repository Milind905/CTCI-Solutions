import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def list_of_depths(root):
    level_list = []
    current = []
    current.append(root)
    while len(current) > 0:
        level_list.append(current)
        parent = current
        current = []
        for node in parent:
            if node.left is not None:
                current.append(node.left)
            if node.right is not None:
                current.append(node.right)
    return level_list

def print_level_list(level_list):
    for level in level_list:
        nodes = []
        for node in level:
            nodes.append(node.value)
        print nodes

def main():
    #TODO: Make good expect function
    root = BinaryNode(4)
    root.left = BinaryNode(2)
    root.left.left = BinaryNode(1)
    root.left.right = BinaryNode(3)
    root.right = BinaryNode(5)
    root.right.right = BinaryNode(6)
    root.right.right.right = BinaryNode(7)
    print_binary_tree(root)
    level_list = list_of_depths(root)
    print_level_list(level_list)

if __name__ == '__main__':
    main()
