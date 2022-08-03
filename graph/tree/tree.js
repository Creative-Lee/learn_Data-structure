class Node {
  constructor() {
    this.left = null;
    this.value = null;
    this.right = null;
  }
}

class Tree {
  contructor() {
    this.root = null;
  }

  setRoot(node) {
    this.root = node;
  }
  getRoot() {
    return root;
  }
  makeNode(left, value, right) {
    const node = new Node();
    node.left = left;
    node.value = value;
    node.right = right;
    return node;
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node != null) {
      this.preorder(node.left);
      this.preorder(node.right);
      console.log(node.data);
    }
  }
}

const t = new Tree();
const D = t.makeNode(null, "D", null);
const E = t.makeNode(null, "E", null);
const B = t.makeNode(D, "B", E);
const F = t.makeNode(null, "F", null);
const G = t.makeNode(null, "G", null);
const C = t.makeNode(F, "C", G);
const A = t.makeNode(B, "A", C);

t.setRoot(A);

t.inorder(t.root);
