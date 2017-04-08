import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNodeWithParent
from node_helpers import print_binary_tree
from expect import expect

def find_successor(node):
    if node.right is not None:
        return find_leftmost_node(node.right)
    else:
        return find_unvisited_node(node)

def find_leftmost_node(root):
    while root.left is not None:
        root = root.left
    return root

def find_unvisited_node(node):
    while node.parent is not None:
        if(node.parent.left == node):
            return node.parent
        node = node.parent
    return None

def main():
    #TODO: update tests so that I can check the nodes themselves (basically expect should print the node.value, not the <node> itself)
    root = BinaryNodeWithParent(6)
    root.left = BinaryNodeWithParent(3, root)
    root.left.left = BinaryNodeWithParent(2, root.left)
    root.left.left.left = BinaryNodeWithParent(1, root.left.left)
    root.left.right = BinaryNodeWithParent(4, root.left)
    root.left.right.right = BinaryNodeWithParent(5, root.left.right)
    root.right = BinaryNodeWithParent(11, root)
    root.right.left = BinaryNodeWithParent(7, root.right)
    root.right.left.right = BinaryNodeWithParent(8, root.right.left)
    root.right.left.right.right = BinaryNodeWithParent(9, root.right.left.right)
    root.right.left.right.right.right = BinaryNodeWithParent(10, root.right.left.right.right)
    root.right.right = BinaryNodeWithParent(20, root.right)
    expect(find_successor(root).value, root.right.left.value)
    expect(find_successor(root.left.left.left).value, root.left.left.value)
    expect(find_successor(root.left.right.right).value, root.value)

    root = BinaryNodeWithParent(6)
    root.left = BinaryNodeWithParent(1, root)
    root.left.right = BinaryNodeWithParent(2, root.left)
    root.left.right.right = BinaryNodeWithParent(3, root.left.right)
    root.left.right.right.right = BinaryNodeWithParent(4, root.left.right.right)
    expect(find_successor(root.left.right.right.right).value, root.value)
    expect(find_successor(root.left).value, root.left.right.value)
    
if __name__ == '__main__':
    main()
