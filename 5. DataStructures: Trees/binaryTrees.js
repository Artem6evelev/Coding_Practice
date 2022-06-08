function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Level: 0: 2^0 1 // - node
// Level: 1: 2^1 2
// Level: 2: 2^2 4
// Level: 3: 2^3 8 // - total number of nodes

// # of nodes = 2^h (height starts from 1) -->
// # of nodes = 2^h - 1
// log node = steps - is a number of steps or height

// log 100 = 2
// 10^2 = 100