import sys
sys.path.insert(0, '../datastructures')
sys.path.insert(1, '../test')

from node import BinaryNode
from node_helpers import print_binary_tree
from expect import expect

DEPENDENCY_INDEX = 0
DEPENDANT_INDEX = 1

def build_order(projects, dependencies):
    dependency_count = build_count(projects, dependencies) #O(MAX(V,E))
    order = []
    process_next = []
    process_next += find_count_zero(dependency_count) #O(V)
    while len(order) < len(projects): #O(V)
        n = process_next.pop(0)
        decrement_dependency_count(dependencies, dependency_count, n) #O(E)
        process_next += find_count_zero(dependency_count)
        order.append(n)
    
    if len(order) == len(projects):
        return order
    else:
        raise ValueError('No valid build order') 

def build_count(projects, dependencies):
    dependency_count = {}
    for project in projects:
        dependency_count[project] = 0
    for dep in dependencies:
        dependency_count[dep[DEPENDANT_INDEX]] += 1
    return dependency_count

def find_count_zero(dependency_count):
    zero_dependencies = []
    for project in dependency_count:
        if dependency_count[project] == 0:
            dependency_count[project] = -1
            zero_dependencies.append(project)
    return zero_dependencies

def decrement_dependency_count(dependencies, dependency_count, project):
    for dep in dependencies:
        if dep[DEPENDENCY_INDEX] == project:
            dependency_count[dep[DEPENDANT_INDEX]] -= 1

def main():
    #Update expect, could have two possible value, need to take in some kind of regex expression
    project_list = ['A', 'B', 'C', 'D', 'E', 'F']
    dependency_list = [('A', 'D'), ('F', 'B'), ('B', 'D'), ('F', 'A'), ('D', 'C')]
    expect(build_order(project_list, dependency_list), ['E', 'F', 'A', 'B', 'D', 'C'])



if __name__ == '__main__':
    main()
