def zero_matrix(matrix):
    print "Initial Matrix"
    print_matrix(matrix)

    ignoreRow = []
    ignoreCol = []

    for row_num in xrange(len(matrix)):
        for col_num in xrange(len(matrix[row_num])):
            if matrix[row_num][col_num] == 0:
                if row_num not in ignoreRow: ignoreRow.append(row_num)
                if col_num not in ignoreCol: ignoreCol.append(col_num)

    # Change rows
    for row_num in ignoreRow:
        for col in xrange(0, len(matrix[row_num])):
            matrix[row_num][col] = 0

    # Change cols
    for col_num in ignoreCol:
        for row in xrange(0, len(matrix)):
            matrix[row][col_num] = 0

    print "Altered Matrix"
    print_matrix(matrix)

def print_matrix(matrix):
    for row in matrix:
        print row
    print '\n\n\n'

def build_matrix_4_4():
    return [
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
    ]

def build_matrix_5_5():
    return [
        [0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0]
    ]

def main():
    zero_matrix(build_matrix_4_4())
    zero_matrix(build_matrix_5_5())

if __name__ == '__main__':
    main()
