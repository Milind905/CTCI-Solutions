# BFS on T1, find root of T2?  -> T1 >> T2...
# Linear time ... Linear Space O(nT1)
# Check if node is same? hashvalue -> O(nT1) good
# no hashvalue -> Check subtrees O(nT2)
# Say multiple identical node values found, might have to check all so O(nT1*nT2)... pretty bad

# Not Binary SEARCH Tree, normal binary tree
# Pre-order traversal on T1 and T2, if T2 has same pre-order, then they match
# Remember to include null nodes

import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def check_subtree(root1, root2):
  list1 = []
  list2 = []
  pre_order_traversal(root1, list1)
  pre_order_traversal(root2, list2)
  return check_if_sublist(list1, list2)

def pre_order_traversal(root, list_of_nodes):
  if root.left is not None:
    pre_order_traversal(root.left, list_of_nodes)
  if root.right is not None:
    pre_order_traversal(root.right, list_of_nodes)

  list_of_nodes.append(root.value)
  return

def check_if_sublist(big, small):

def main():
  root = BinaryNode('20')
  root.left = BinaryNode('10')
  root.right = BinaryNode('30')
  root.left.left = BinaryNode('5')
  root.left.right = BinaryNode('15')
  root.left.left.left = BinaryNode('3')
  root.left.left.right = BinaryNode('7')
  root.left.right.right = BinaryNode('17')
  print_binary_tree(root)
  check_subtree(root, root.left.left)

if __name__ == '__main__':
  main()
