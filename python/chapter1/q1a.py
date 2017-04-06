import sys
sys.path.insert(0, '../test')
from expect import expect

def isUnique(input):
    uniqueChars = []
    
    for ch in input:
        if ch in uniqueChars:
            return False
        else:
            uniqueChars.append(ch)
    return True

def main():
    expect(isUnique("abcdef"), True)
    expect(isUnique("abcabd"), False)

if __name__ == '__main__':
    main()


