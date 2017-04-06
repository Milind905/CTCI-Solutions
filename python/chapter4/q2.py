import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def minimal_tree(arr):
    if len(arr) == 0:
        return None
    if len(arr) == 1:
        return BinaryNode(arr[0])
    middle = len(arr) // 2
    cur_node = BinaryNode(arr[middle])
    cur_node.left = minimal_tree(arr[0:middle])
    cur_node.right = minimal_tree(arr[middle+1:])
    return cur_node

def main():
    #TODO: Build expect to check binary tree
    root = minimal_tree([1,2,3,4,5,6])
    print_binary_tree(root)

if __name__ == '__main__':
    main()
