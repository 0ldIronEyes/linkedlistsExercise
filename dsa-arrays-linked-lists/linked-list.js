/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else
    {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length+=1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null)
    {
      this.head = newNode;
    }
    else
    {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;

  }

  /** pop(): return & remove last item. */

  pop() {
      this.length -= 1;
      return this.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    this.length -=1;
    return this.removeAt(0);
  }

  getAtIndex(index)
  {
    let current = this.head;
    let check = 0;
    while (current != null && check != index)
    {
      check++;
      current = current.next;
    }
    return current;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0)
    {
      throw new error("invalid index");
    }
    return this.getAtIndex(idx);
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0)
    {
      throw new error("invalid index");
    }
    this.getAtIndex(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0)
    {
      throw new error("invalid index");
    }
    if (idx == 0)
    {
      unshift(val);
    }
    let previous= this.getAtIndex(idx-1);
    let newNode = new Node(val);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length +=1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0)
    {
      throw new error("invalid index");
    }
    if (idx == 0)
    {
      this.head = this.head.next;
      this.length --;
      if (this.length == 1)
      {
        this.tail = this.head;
      }
      return this.head;
    }

    if (idx == this.length -1)
    {
      let previousNode = getAt(idx-1);
      let removeNode = previousNode.next;
      previousNode.next = null;
      this.tail = previousNode;
      this.length --;
      return removeNode;
    }

    let previousNode = getAt(idx-1);
    let removeNode = previousNode.next;
    let nextNode = removeNode.next;
    this.length --;
    previousNode.next = nextNode;
    return removeNode;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length ===0) return 0;

    let total = 0;
    let current = this.head;

    while (current != null)
    {
      total += current.val;
      current = current.next;
    }

    return total/ this.length;
  }
}

module.exports = LinkedList;
