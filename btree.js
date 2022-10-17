class BinarySearchTree {

  constructor() {
    this.pivot = null;
  }

  createNode(val) {
    return {
      data: val,
      left: null,
      right: null
    }
  }

  root() {
    return (this.pivot === null) ? null : this.pivot;
  }

  add(data) {

    let addRec = (node, val) => {
      if (!node) {
        return this.createNode(val)
      }

      if (node.data === val) {
        return node;
      }

      if (val < node.data) {
        node.left = addRec(node.left, val);
      }

      if (val > node.data) {
        node.right = addRec(node.right, val);
      }

      return node;

    }
    this.pivot = addRec(this.pivot, data);
  }

  has(data) {
    let find = (node, val) => {
      if (node === null) return false;
      if (node.data === val) return true;
      
      if (val < node.data) {
        return find(node.left, val);
      }
      
      if (val > node.data) {
        return find(node.right, val); 
      }
    }

    return find(this.pivot, data);
  }

  find(data) {
    
    let findVal = (node, val) => {

      if (node.data === val) return node;

      if (val > node.data) {
        if (node.right === null) return null;
        return findVal(node.right, val);
      } else {
        if (node.left === null) return null;
        return findVal(node.left, val);
      }
    }

    return findVal(this.pivot, data);
  }

  remove(data) {
  
    let removeVal = (node, val) => {

      if (node === null) return null;
    
      if (val < node.data) {
        node.left = removeVal(node.left, val);
        return node;
      } else if (val > node.data) {
        node.right = removeVal(node.right,val);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let minR = node.right;
        for (;;) {
          if (minR.left === null) break;
          minR = minR.left;
        }
        node.data = minR.data;
        node.right = removeVal(node.right, minR.data);

        return node;
      }

    }

    this.pivot = removeVal(this.pivot, data);

  }

  min() {
    if (!this.pivot === null) return false;
    let cur = this.pivot;
    for (;;) {
      if (cur.left === null) break;
      cur = cur.left;
    }
    return cur.data;
  }

  max() {
    if (!this.pivot === null) return false;
    let cur = this.pivot;
    for (;;) {
      if (cur.right === null) break;
      cur = cur.right;
    }
    return cur.data;
  }
}

let a = new BinarySearchTree();
a.add(10);
a.add(15);
a.add(1);
a.add(9);
a.add(8);
a.add(2);

console.log(a.root());