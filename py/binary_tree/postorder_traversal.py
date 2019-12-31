from node import Node

root = Node(1) 
root.left = Node(2) 
root.right = Node(3) 
root.left.left = Node(4) 
root.left.right = Node(5) 

#     1
#    / \
#   2   3
#  / \
# 4   5

def printPostorder(node):
  if node:
    printPostorder(node.left)
    printPostorder(node.right)
    print(node.key)

printPostorder(root)


