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

  insert(value) {
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
  delete(key, root = this.root) {
    if (root == null) {
      return root;
    }

    if (key < root.data) root.left = this.delete(key, root.left);
    else if (key > root.data) root.right = this.delete(key, root.right);
    else {
      // if node is a leaf
      if (!root.left && !root.right) return null;
      else if (root.right == null) return root.left;
      else if (root.left == null) return root.right;
      else {
        let closestNode = root.right;

        while (closestNode.left != null) closestNode = closestNode.left;

        root.data = closestNode.data;
        root.right = this.delete(root.data, root.right);
      }
    }
    return root;
  }
  find(key, root = this.root) {
    if (!key) {
      return;
    }

    if (key > root.data) {
      if (!root.right) {
        console.log("Not in the tree");
        return;
      }
      this.find(key, root.right);
    } else if (key < root.data) {
      if (!root.left) {
        console.log("Not in the tree");
        return;
      }
      this.find(key, root.left);
    } else console.log(root);
  }
  levelOrder(queue = [this.root], arr = []) {
    let root = queue[0];

    if (root.left) queue.push(root.left);

    if (root.right) queue.push(root.right);

    arr.push(root.data);
    queue.shift();

    if (queue.length == 0) {
      console.log(arr);
      return;
    } else {
      this.levelOrder(queue, arr);
    }
  }
  preorder(root = this.root, arr = []) {
    if (root == null) return;

    arr.push(root.data);
    this.preorder(root.left, arr);
    this.preorder(root.right, arr);
    return arr;
  }
  inorder(root = this.root, arr = []) {
    if (root == null) return;

    this.inorder(root.left, arr);
    arr.push(root.data);
    this.inorder(root.right, arr);

    return arr;
  }
  postorder(root = this.root, arr = []) {
    if (root == null) return;

    this.postorder(root.left, arr);
    this.postorder(root.right, arr);
    arr.push(root.data);
    return arr;
  }
}
