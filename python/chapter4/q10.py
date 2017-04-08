
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
  print list1
  print list2
  return check_if_sublist(list1, list2)

def pre_order_traversal(root, list_of_nodes):
  if root.left is not None:
    pre_order_traversal(root.left, list_of_nodes)
  else:
    list_of_nodes.append('None')
  if root.right is not None:
    pre_order_traversal(root.right, list_of_nodes)
  else:
    list_of_nodes.append('None')

  list_of_nodes.append(root.value)
  return

def check_if_sublist(big, small):
  window = len(small)
  for i in xrange(len(big)-window):
    if big[i:i+window] == small:
      return True
  return False

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
  expect(check_subtree(root, root.left.left), True)
  expect(check_subtree(root.left, root.left.left), True)
  expect(check_subtree(root.left, root.right), False)

  root1 = BinaryNode('20')
  root1.left = BinaryNode('30')
  root2 = BinaryNode('20')
  root2.right = BinaryNode('30')
  expect(check_subtree(root1, root2), False)

if __name__ == '__main__':
  main()
