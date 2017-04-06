import sys
sys.path.insert(0, '../../datastructures')
sys.path.insert(1, '..')
from node import BinaryNode, GraphNode, Graph
from expect import expect

def main():
    bn = BinaryNode(3)
    expect(bn.value, 3)
    expect(bn.left, None)
    expect(bn.right, None)

    left = BinaryNode(5)
    right = BinaryNode(12)
    bn = BinaryNode(7, left, right)
    expect(bn.value, 7)
    expect(bn.left.value, left.value)
    expect(bn.right.value, right.value)

    gn = GraphNode('A')
    expect(gn.value, 'A')
    expect(gn.adjacent, [])

    nodeA = GraphNode('A')
    nodeB = GraphNode('B')
    nodeC = GraphNode('C')
    nodeD = GraphNode('D', [nodeA,nodeB,nodeC])
    expect(nodeD.value, 'D')
    expect(nodeD.adjacent, [nodeA,nodeB,nodeC])

    graph = Graph([nodeA,nodeB,nodeC,nodeD])
    expect(graph.nodes, [nodeA,nodeB,nodeC,nodeD])
    nodeE = GraphNode('E', [nodeC])
    graph.add(nodeE)
    expect(graph.nodes, [nodeA,nodeB,nodeC,nodeD,nodeE])

if __name__ == '__main__':
    main()
    