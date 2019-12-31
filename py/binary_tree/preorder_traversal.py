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

def printPreorder(node):
  if node:
    print(node.key)
    printPreorder(node.left)
    printPreorder(node.right)

printPreorder(root)


