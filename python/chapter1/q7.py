# This doesn't fully work, fix it!

def rotateMatrix(matrix):
    print "Initial Matrix"
    print_matrix(matrix)

    n = len(matrix)
    for layer in xrange(n//2):
        print "here"
        start_index = layer
        finish_index = n - 1 - start_index
        rotate_outer_layer(matrix, start_index, finish_index)

    print "Final Matrix"
    print_matrix(matrix)


def rotate_outer_layer(matrix, start_index, finish_index):
    # finish_index = len(matrix)-1-start_index
    # print("start_index: , finish_index: ", start_index, finish_index)
    # if finish_index - start_index < 1:
    #     return
    for i in xrange(start_index, finish_index):
        cursor_offset = i - start_index #Which item in the select row/column to move
        #Store top row
        top = matrix[start_index][i]
        #Replace top row with left column
        matrix[start_index][i] = matrix[finish_index-cursor_offset][start_index]
        #Replace left column with bottom row
        matrix[finish_index-cursor_offset][start_index] = matrix[finish_index][finish_index-i]
        #Replace bottom row with right column
        matrix[finish_index][finish_index-i] = matrix[i][finish_index]
        #Replace right column with top
        matrix[i][finish_index] = top
    # rotate_outer_layer(matrix, start_index+1)

def build_matrix_3_3():
    return [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I']
    ]

def build_matrix_4_4():
    return [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P']
    ]

def build_matrix_5_5():
    return [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'J'],
        ['K', 'L', 'M', 'N', 'O'],
        ['P', 'Q', 'R', 'S', 'T'],
        ['U', 'V', 'W', 'X', 'Y']
    ]

def print_matrix(matrix):
    for row in matrix:
        print row
    print '\n\n\n'

def main():
    # rotateMatrix(build_matrix_4_4())
    rotateMatrix(build_matrix_4_4())

if __name__ == '__main__':
    main()

