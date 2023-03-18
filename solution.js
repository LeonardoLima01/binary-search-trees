class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
  Insert(value) {}
}

function buildTree(arr, start = 0, end = arr.length - 1) {
  // Sort array
  arr.sort();

  // Remove duplicates
  removeDuplicates(arr);

  // Base case
  if (start > end) {
    return null;
  }

  let mid = parseInt((start + end) / 2);
  let rootNode = new Node(arr[mid]);

  rootNode.left = bst(arr, start, mid - 1);
  rootNode.right = bst(arr, mid + 1, end);

  return rootNode;
}
