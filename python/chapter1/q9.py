import sys
sys.path.insert(0, '../test')
from expect import expect

def string_rotation(input1, input2):
    if len(input1) != len(input2):
        return False
        
    if is_substr(input2, input1+input1):
        return True
    else:
        return False

def is_substr(substring, mainstring):
    print substring
    print mainstring
    return substring in mainstring

def main():
    expect(string_rotation("waterbottle", "erbottlewat"), True)
    expect(string_rotation("waterwater", "waterbottle"), False)

if __name__ == '__main__':
    main()
