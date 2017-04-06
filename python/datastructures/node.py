class BinaryNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class GraphNode:
    def __init__(self, value, adjacent=[]):
        self.value = value
        self.adjacent = adjacent

class Graph:
    def __init__(self, nodes=[]):
        self.nodes = nodes
    
    def add(self, data):
        if isinstance(data, GraphNode):
            self.nodes.append(data)
        else:
           raise ValueError('Must add a GraphNode')
