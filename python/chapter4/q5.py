import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def check_bst(node):
    return validate_bst(node, None, None)

def validate_bst(node, min, max):
    if node is None:
        return True
    if (min is not None and node.value <= min) or (max is not None and node.value > max):
        return False
    if (not validate_bst(node.left, min, node.value)) or (not validate_bst(node.right, node.value, max)):
        return False
    return True
    
def main():
    root = BinaryNode(20)
    root.left = BinaryNode(10)
    root.right = BinaryNode(30)
    root.left.left = BinaryNode(5)
    root.left.right = BinaryNode(15)
    root.left.left.left = BinaryNode(3)
    root.left.left.right = BinaryNode(7)
    root.left.right.right = BinaryNode(17)
    expect(check_bst(root), True)
    expect(check_bst(root.left.left.left), True)

    root = BinaryNode(20)
    root.left = BinaryNode(30)
    expect(check_bst(root), False)

    root = BinaryNode(20)
    root.left = BinaryNode(10)
    root.left.right = BinaryNode(30)
    expect(check_bst(root), False)

if __name__ == '__main__':
    main()
