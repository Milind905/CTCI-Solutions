import sys
from colors import *

#TODO: use try-catch, accept error messages/codes in parameter: expected
def expect(got, expected):
  if got == expected:
    sys.stdout.write(GREEN)
    prefix = u'\u2713'
  else:
    sys.stdout.write(RED)
    prefix = 'X'

  print '%s Actual: %s\tExpected: %s' % (prefix, repr(got), repr(expected))
  sys.stdout.write(RESET)
