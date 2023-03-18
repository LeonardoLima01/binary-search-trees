class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }
  buildTree(arr, start = 0, end = arr.length - 1) {
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

    rootNode.left = this.buildTree(arr, start, mid - 1);
    rootNode.right = this.buildTree(arr, mid + 1, end);

    return rootNode;
  }

  Insert(value) {
    let currentNode = this.root;
    let newNode = new Node(value);

    while (currentNode) {
      if (value < currentNode.data) {
        if (currentNode.left == null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.data) {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
      console.log(currentNode);
    }
  }
}
