const Tree = require("./solution");

function createArray(n = 16, arr = []) {
  while (n != 0) {
    arr.push(Math.floor(Math.random() * 100));
    n--;
  }
  return arr;
}

const tree = new Tree(createArray());
console.log("Balanced:", tree.isBalanced());
console.log("Lever Order =>", tree.levelOrder());
console.log("Preorder =>", tree.preorder());
console.log("Inorder =>", tree.inorder());
console.log("Postorder =>", tree.postorder());
for (let i = 0; i < 5; i++) {
  tree.insert(Math.floor(Math.random() * 200));
}
console.log("Balanced:", tree.isBalanced());
tree.rebalance();
console.log("Balanced:", tree.isBalanced());
console.log("Lever Order =>", tree.levelOrder());
console.log("Preorder =>", tree.preorder());
console.log("In-order =>", tree.inorder());
console.log("Post-order =>", tree.postorder());
