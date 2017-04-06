import sys
sys.path.insert(0, '../test')
from expect import expect

def isPalindrome(input):
    if len(input) < 2:
        return True

    input_lower = input.lower()
    letter_count = {}

    for ch in input_lower:
        if ch in letter_count:
            letter_count[ch] += 1
        else:
            letter_count[ch] = 1

    max_odd_count = len(input_lower) % 2
    cur_odd_count = 0

    for ch in letter_count:
        if letter_count[ch] % 2 == 1:
            cur_odd_count += 1
    
    if(cur_odd_count > max_odd_count):
        return False
    else:
        return True
    

def main():
    expect(isPalindrome("aaaaaaa"), True)
    expect(isPalindrome("not a palindrome"), False)
    expect(isPalindrome("yea aey"), True)
    expect(isPalindrome("aeey  yya"), True)

if __name__ == '__main__':
    main()
