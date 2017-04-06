import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

class CommonAncestor:
    def __init__(self, a_found, b_found, ca):
        self.a_found = a_found
        self.b_found = b_found
        self.ca = ca

def common_ancestor_wrapper(root, nodeA, nodeB):
    return common_ancestor(root, nodeA, nodeB).ca

def common_ancestor(root, nodeA, nodeB):
    if root is None:
        return CommonAncestor(False, False, None)
    if root.value == nodeA.value and root.value == nodeB.value:
        return CommonAncestor(True, True, root)

    left = common_ancestor(root.left, nodeA, nodeB)
    if left.a_found and left.b_found and left.ca is not None:
        return left
    right = common_ancestor(root.right, nodeA, nodeB)
    if right.a_found and right.b_found and right.ca is not None:
        return right

    nodeA_found = left.a_found or right.a_found
    nodeB_found = left.b_found or right.b_found
    node_isA = root.value == nodeA.value
    node_isB = root.value == nodeB.value

    if nodeA_found and nodeB_found:
        return CommonAncestor(nodeA_found, nodeB_found, root)
    elif nodeA_found and node_isB:
        return CommonAncestor(nodeA_found, node_isB, root)
    elif nodeB_found and node_isA:
        return CommonAncestor(node_isA, nodeB_found, root)
    elif node_isA or node_isB:
        return CommonAncestor(node_isA, node_isB, None)
    else:
        return CommonAncestor(nodeA_found, nodeB_found, None)

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
    random_node = BinaryNode('22')

    expect(common_ancestor_wrapper(root, root.left.left.left, root.left.right).value, '10') 
    expect(common_ancestor_wrapper(root, root.left.left.left, root.right).value, '20')
    expect(common_ancestor_wrapper(root, root.left.left.left, root.left.left.left).value, '3')
    expect(common_ancestor_wrapper(root, root, root.left.left).value, '20')
    expect(common_ancestor_wrapper(root, root.left, root.left.left).value, '10')
    expect(common_ancestor_wrapper(root, root.left, random_node), None)

if __name__ == '__main__':
  main()


#My solution
#(root, nodeA, nodeB)

#Case 1: root = null -> return [False, False, None]
#Case 2: root = nodeA and nodeB -> [True, True, root]
#Case 3: root = nodeA -> [True, False, None]
#Case 4: root = nodeB -> [False, True, None]
#Case 5: root is neither
  # left = recurse(root.left, nodeA, nodeB)[0:2]
  # right = recurse(root.right, nodeA, nodeB)[0:2]
#Case 5a: left = [True, True, CA] or right = [True, True, CA] -> If CA is not None -> return [True, True, CA], already found
#Case 5b: if left = [True, False] and right = [False, True] -> Found CA
#Case 5c: if left = [False, True] and right = [True, False] -> Found CA
#Case 5c: else:
  #NodeAFound = left[0] || right[0]
  #NodeBFound = left[1] || right[1]
  #return [NodeAFound, NodeBFound, None]