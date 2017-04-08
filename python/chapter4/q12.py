import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def paths_with_sum(root, sum):
    [new_list, count] = find_total_paths(root, sum)
    return count

def find_total_paths(node, sum):
    if node is None:
        return [[], 0]

    left = find_total_paths(node.left, sum) 
    right = find_total_paths(node.right, sum)
    sums_below = left[0] + right[0]
    count = left[1] + right[1]
    new_list = [node.value]
    new_list += [x+node.value for x in sums_below]
    for value in new_list:
        if value == sum:
            count += 1
    return [new_list, count]

def main():
    root = BinaryNode(-3)
    root.left = BinaryNode(2)
    root.right = BinaryNode(3)
    root.left.left = BinaryNode(7)
    root.left.right = BinaryNode(10)
    root.right.left = BinaryNode(4)
    root.right.right = BinaryNode(5)
    root.left.left.left = BinaryNode(-1)
    root.right.left.right = BinaryNode(1)

    expect(paths_with_sum(root, 5), 5)
    expect(paths_with_sum(root, 8), 3)

if __name__ == '__main__':
    main()
