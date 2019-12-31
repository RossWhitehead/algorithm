MAX = 100
lookup = [0] * (MAX)

def fib(n):
  if n > MAX:
    raise ValueError("'n' cannot exceed ", MAX)
  
  if n <= 1:
    return n

  if lookup[n] == 0:
    lookup[n] = fib(n-1) + fib(n-2)

  return lookup[n]

print fib(7)