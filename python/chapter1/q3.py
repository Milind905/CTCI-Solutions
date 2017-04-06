import sys
sys.path.insert(0, '../test')
from expect import expect

def urlify(input):
    urlstring = ''
    urlstring = urlstring.join(['%20' if ch == ' ' else ch for ch in input])
    return urlstring

def main():
    expect(urlify('a  b c   d efgh i j'), 'a%20%20b%20c%20%20%20d%20efgh%20i%20j')
    expect(urlify('the lazy dog '), 'the%20lazy%20dog%20')
    expect(urlify('therearenospaces'), 'therearenospaces')

if __name__ == '__main__':
    main()
