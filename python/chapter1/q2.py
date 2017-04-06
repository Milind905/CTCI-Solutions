import sys
sys.path.insert(0, '../test')
from expect import expect

def isPermutation(input1, input2):
    if len(input1) != len(input2):
        return False
    
    input1_char_count = {}
    for ch in input1:
        if ch in input1_char_count:
            input1_char_count[ch] += 1
        else:
            input1_char_count[ch] = 1
    for ch in input2:
        if ch in input1_char_count and input1_char_count[ch] > 0:
            input1_char_count[ch] -= 1
        else:
            return False
    return True
    

def main():
    expect(isPermutation("abca", "cbaa"), True)
    expect(isPermutation("abcd", "abcdd"), False)
    expect(isPermutation("abcd", "abce"), False)

if __name__ == '__main__':
  main()
