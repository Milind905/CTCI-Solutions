import sys
sys.path.insert(0, '../test')
from expect import expect

# Assuming case-sensitive
def isOneEditAway(input1, input2):
    input_len_diff = len(input1) - len(input2)
    if input_len_diff < -1 or input_len_diff > 1:
        return False

    if input_len_diff == -1:
        return isOneEditAwayHelper(input1, input2)
    else:
        return isOneEditAwayHelper(input2, input1)

def isOneEditAwayHelper(smaller, larger):
    max_changes_allowed = 1
    num_changes_made = len(larger) - len(smaller)

    for i in xrange(len(smaller)):
        if smaller[i] != larger[i]:
            num_changes_made += 1

    if num_changes_made > max_changes_allowed:
        return False
    else:
        return True

def main():
    expect(isOneEditAway("abcd", "ab"), False)
    expect(isOneEditAway("abcd", "abc"), True)
    expect(isOneEditAway("abcd", "abce"), True)
    expect(isOneEditAway("aaaa", "aabb"), False)

if __name__ == '__main__':
    main()
