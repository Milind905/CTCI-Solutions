import sys
sys.path.insert(0, '../test')
from expect import expect

def isUnique(input):
    input_sorted = sorted(list(input))
    for i in xrange(1, len(input_sorted)):
        if input_sorted[i] == input_sorted[i-1]:
            return False
    return True

def main():
    expect(isUnique("abcdef"), True)
    expect(isUnique("abcade"), False)

if __name__ == '__main__':
    main()
