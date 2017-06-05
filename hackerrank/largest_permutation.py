# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

def find_actual_answer(n, k, a):
    num_to_index = {}
    for i in xrange(len(a)):
        num_to_index[a[i]] = i

    for i in xrange(min(k, n)):
        cur_num = n-i
        a[num_to_index[cur_num]] = a[i]
        num_to_index[a[i]] = num_to_index[cur_num]
        a[i] = cur_num
        num_to_index[cur_num] = i

    print " ".join(str(x) for x in a)

fo = open("largest_permutation_input.txt", "r")

n,k = [int(x) for x in fo.readline().strip().split(' ')]
a = [int(x) for x in fo.readline().strip().split(' ')]

if len(a) < 2:
    print " ".join(str(x) for x in a)
else:
    find_actual_answer(n, k, a)



