# Non-recursive so stack-attack
MAX = 100
lookup = [0] * (MAX)

def fib(n):
  if n > MAX:
    raise ValueError("'n' cannot exceed ", MAX)

  if n == 1:
    return 1
  
  lookup[1] = 1

  for i in range(2, n+1):
    lookup[i] = lookup[i-1] + lookup[i-2]

  return lookup[n]

print fib(7)