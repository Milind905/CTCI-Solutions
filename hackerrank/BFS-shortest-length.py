# Enter your code here. Read input from STDIN. Print output to STDOUT

class Graph:
    def __init__(self):
        self.nodes = {}
    
    def add_node(self, node):
        self.nodes[node] = set([])
    
    def add_undirected_edge(self, node1, node2):
        self.nodes[node1].add(node2)
        self.nodes[node2].add(node1)
        
    def get_edges(self, node):
        return self.nodes[node]

Q = int(raw_input().strip())
for q0 in xrange(Q):
    my_graph = Graph()
    N, M = [ int(x) for x in raw_input().strip().split(' ') ]
    for q1 in xrange(1, N+1):
        my_graph.add_node(q1)
    for q2 in xrange(M):
        node1, node2 = [ int(x) for x in raw_input().strip().split(' ') ]
        my_graph.add_undirected_edge(node1, node2)
    S = int(raw_input().strip())
    
    node_weight = [None for x in xrange(N+1)]
    node_weight[S] = 0
    queue = []
    queue.append(S)
    
    while len(queue) > 0:
        cur = queue.pop(0)
        adjacent = my_graph.get_edges(cur)
        for adj_node in adjacent:
            if node_weight[adj_node] is None:
                queue.append(adj_node)
                node_weight[adj_node] = node_weight[cur]+6
        
    print " ".join(['-1' if node_weight[x] == None else str(node_weight[x]) for x in xrange(1, len(node_weight)) if x != S ])
        
    
   
    
    
        
    
    