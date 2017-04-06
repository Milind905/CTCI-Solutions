import sys
sys.path.insert(0, '../test')
from expect import expect

def string_compression(input):
    string_comp_array = []
    cur_count = 1

    for i in range(1, len(input)):
        if input[i] == input[i-1]:
            cur_count += 1
        else:
            string_comp_array.append(input[i-1])
            string_comp_array.append(str(cur_count))
            cur_count = 1

    string_comp_array.append(input[len(input)-1])
    string_comp_array.append(str(cur_count))
    string_comp = ''.join(ch for ch in string_comp_array)

    if len(string_comp) < len(input):
        return string_comp
    else:
        return input

def main():
    expect(string_compression("aaabbbcccd"), "a3b3c3d1")
    expect(string_compression("aaaaaa"), "a6")
    expect(string_compression("aabcdef"), "aabcdef")

if __name__ == '__main__':
    main()
