import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

def build_order(projects, dependencies):
    dependency_count = build_count(projects, dependencies) #return dictionary of nodes with count of dependencies
    order = []
    process_next = []
    process_next += find_count_zero(dependency_count) #return list of nodes with no dependencies
    while len(process_next) is not 0:
        n = process_next.pop(0)
        decrement_dependency_count(dependencies, dependency_count, n) #for all dependencies containing n as dependent
        process_next += find_count_zero(dependency_count)
        order.append(n)

    if len(order) == len(projects):
        return order
    else:
        raise ValueError('No valid build order') 


def main():

if __name__ == '__main__':
    main()
