def print_binary_tree(root, tabs=0):
    tab_line = ''
    for i in xrange(tabs):
        tab_line += '\t'
    
    print tab_line + '{'
    print tab_line + '\tvalue: ', root.value
    
    if root.left is not None:
        print tab_line + '\tleft:'
        print_binary_tree(root.left, tabs+1)
    if root.right is not None:
        print tab_line + '\tright:'
        print_binary_tree(root.right, tabs+1)
    print tab_line + '}'
