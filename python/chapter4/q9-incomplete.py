
# Can everything on left be swapped with everything on right? doesn't the orders in left and right need to stay the same cause one node might be the root? ..
# Not completely correct, can swap left and right inter-elements as well.

import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def array_variations(root):
  left_variations = [[]]
  right_variations = [[]]

  if root.left:
    left_variations = array_variations(root.left)
  if root.right:
    right_variations = array_variations(root.right)

  #Build list of arrays
  list_of_arrays = []
  if root.left and root.right:
    for left_variation in left_variations:
      for right_variation in right_variations:
        list_of_arrays.append([root.value] + left_variation + right_variation)
        list_of_arrays.append([root.value] + right_variation + left_variation)
  elif root.right is None:
    for left_variation in left_variations:
      list_of_arrays.append([root.value] + left_variation)
  elif root.left is None:
    for right_variation in right_variations:
      list_of_arrays.append([root.value] + right_variation)
  else:
    list_of_arrays = [[root.value]]

  return list_of_arrays

def main():
  root = BinaryNode(50)
  root.left = BinaryNode(20)
  root.left.left = BinaryNode(10)
  root.left.right = BinaryNode(25)
  root.left.left.left = BinaryNode(5)
  root.left.left.right = BinaryNode(15)
  root.right = BinaryNode(60)
  root.right.right = BinaryNode(70)
  root.right.right.left = BinaryNode(65)
  root.right.right.right = BinaryNode(80)
  print_binary_tree(root)


if __name__ == '__main__':
  main()
