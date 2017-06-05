# 1. Clear all bits between i and j on N
# 2. Add padding left and right on M
# 3. Do an OR between N and M, that is the new value.

import sys
sys.path.insert(0, '../test')
from expect import expect

def insertBinaryNumber(M, N, i, j):
  clearBits(N, i, j)

def clearBits(num, i, j):
  # N = 0100 0000 0000, M = 1 0011, i=2, j=6 OUTPUT: 0100 0100 1100
  # (1 << j+1) - 1 #clear before j (if j = 6 -> 1000 0000 -> 0111 1111)
  # -1 << i #clear after i (if i=2, 1111 1111 1111 -> 1111 1111 1100)
  # 0111 1111 XOR with
  # 1111 1100
  # equals
  # 1000 0011
  print bin((1 << j+1) - 1)
  print bin(-1 << i)
  print bin( bin((1 << j+1) - 1) ^ bin(-1 << i))


def main():
  insertBinaryNumber(bin(19), bin(1024), 2, 6)

if __name__ == '__main__':
    main()
