# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

global_set = []
saved_set = []

def get_solution(target):
    global saved_set
    find_factors(1, target, [])
    
    if len(saved_set) < 1:
        return -1
    
    saved_set = sorted(saved_set)
    cur_num = 1
    ret = [str(cur_num)]
    
    for num in saved_set:
        cur_num *= num
        ret.append(str(cur_num))
    
    return ' '.join(ret)

def find_factors(cur_product, target, cur_set):
    global global_set
    global saved_set
    
    for num in global_set:
        if cur_product*num == target:
            cur_set.append(num)
            saved_set = cur_set
            return True
        elif cur_product*num < target:
            cur_set.append(num)
            found = find_factors(cur_product*num, target, cur_set)
            if found:
                return True
            else:
                cur_set.pop()
    return False
       
def main():
    global global_set
    
    n = 231000000
    global_set = [2, 3, 5, 7, 11, 13, 17, 19]
    # global_set = [int(x) for x in raw_input().strip().split(" ")]
    global_set = sorted(global_set, reverse=True)
    print get_solution(n)

if __name__ == '__main__':
    main()
