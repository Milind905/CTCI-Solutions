import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from collections import deque
from node import GraphNode, Graph
from expect import expect

def route_between_nodes(node_A, node_B):
    if node_A.value == node_B.value:
        return True

    visited_nodes_A = set()
    visited_nodes_B = set()
    visited_nodes_A.add(node_A.value)
    visited_nodes_B.add(node_B.value)
    queue_A = deque()
    queue_B = deque()
    queue_A.appendleft(node_A)
    queue_B.appendleft(node_B)

    while len(queue_A) is not 0 or len(queue_B) is not 0:
        if len(queue_A) is not 0:
            cur_node = queue_A.pop()
            for n in cur_node.adjacent:
                if n.value in visited_nodes_B:
                    return True
                if n.value not in visited_nodes_A:
                    visited_nodes_A.add(n.value)
                    queue_A.appendleft(n)
        if len(queue_B) is not 0:
            cur_node = queue_B.pop()
            for n in cur_node.adjacent:
                if n.value in visited_nodes_A:
                    return True
                if n.value not in visited_nodes_B:
                    visited_nodes_B.add(n.value)
                    queue_B.appendleft(n)
    return False
    
def main():
    B = GraphNode('B')
    C = GraphNode('C')
    E = GraphNode('E')
    D = GraphNode('D', [B, C])
    A = GraphNode('A', [B, D, E])
    myGraph = Graph([A,B,C,D,E])
    expect(route_between_nodes(A, C), True)
    expect(route_between_nodes(E, C), False)
    expect(route_between_nodes(D, E), False)
    expect(route_between_nodes(D, A), True)

if __name__ == '__main__':
    main()
