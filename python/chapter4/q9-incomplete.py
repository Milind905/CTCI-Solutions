
# Only thing that changes is the order of left and right children
# At leaf, cannot change array -> return 1 array of 1 node (itself)
# At leaf + 1 level: max change of 2 items (if left and right.) -> return array variations
# At leaf + 2 level ... swap left subtree and right subtree in array -> return array variations
# Not sure if this is correct!
# Can everything on left be swapped with everything on right? doesn't the orders in left and right need to stay the same cause one node might be the root? ..

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


if __name__ == '__main__':
  main()
