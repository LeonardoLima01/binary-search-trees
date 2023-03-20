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
    arr.sort((a, b) => a - b);

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
    }
  }
  Delete(value) {
    let currentNode = this.root;
    let previousNode;

    while (currentNode) {
      if (currentNode.data != value) {
        // Set node before node with given value
        if (currentNode.left) {
          if (currentNode.left.data == value) {
            previousNode = currentNode;
          }
        }
        if (currentNode.right) {
          if (currentNode.right.data == value) {
            previousNode = currentNode;
          }
        }

        // Set current node
        currentNode =
          value < currentNode.data ? currentNode.left : currentNode.right;
      } else {
        // If node is a leaf (no links)
        if (currentNode.left == null && currentNode.right == null) {
          value > previousNode.data
            ? (previousNode.right = null)
            : (previousNode.left = null);
          break;
        }
        // If node has only 1 link
        else if (currentNode.left == null || currentNode.right == null) {
          if (currentNode.left) {
            previousNode.left == currentNode
              ? (previousNode.left = currentNode.left)
              : (previousNode.right = currentNode.left);
            break;
          } else {
            previousNode.left == currentNode
              ? (previousNode.left = currentNode.right)
              : (previousNode.right = currentNode.right);
            break;
          }
        }
        // If node has 2 links
        else {
          // Get closest number below the one being removed (9 is the closest to 10)
          let closestNode = currentNode.right;

          while (closestNode.left != null) {
            previousNode = closestNode;
            closestNode = closestNode.left;
          }

          console.log("PREVVV: ", previousNode);
          console.log("CURRRR: ", currentNode);
          console.log("CLOSSS: ", closestNode);

          previousNode.left = closestNode.right;
          currentNode.data = closestNode.data;
          break;
        }
        break;
      }
    }
  }
}
