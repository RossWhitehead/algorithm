from node import Node

root = Node(1) 
root.left = Node(2) 
root.right = Node(3) 
root.left.left = Node(4) 
root.left.right = Node(5) 

queue = []
queue.append(root)

while len(queue) > 0:
  node = queue.pop(0)
  print node.key
  if node.left:
    queue.append(node.left)
  if node.right:
    queue.append(node.right)

