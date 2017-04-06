import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def is_balanced(root):
    if find_subtree_depth(root) > 0:
        return True
    else:
        return False
    
def find_subtree_depth(root):
    if root is None:
        return 0
    left_height = find_subtree_depth(root.left)
    right_height = find_subtree_depth(root.right)

    if left_height < 0 or right_height < 0:
        return -1

    if(abs(left_height - right_height) > 1):
        return -1
    else:
        return max(left_height, right_height) + 1

def main():
    root = BinaryNode(4)
    root.left = BinaryNode(2)
    root.left.left = BinaryNode(1)
    root.left.right = BinaryNode(3)
    root.right = BinaryNode(5)
    root.right.right = BinaryNode(6)
    print_binary_tree(root)
    expect(is_balanced(root), True)
    root.right.right.right = BinaryNode(7)
    print_binary_tree(root)
    expect(is_balanced(root), False)

if __name__ == '__main__':
    main()