class Node{
  constructor(value){
    this.value = value;  
    this.next = null;
  }
}

class Queue{
  constructor(){ 
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  enQueue(value){
    const newNode = new Node(value);

    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  deQueue(){
    if(this.isEmpty()){
      console.log('큐가 비었습니다.')
      return
    }

    const deletedNode = this.head;

    if(this.size === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next
    }
    
    this.size--;
    return deletedNode;
  }

  peek(){
    return this.head
  }

  isEmpty(){
    return !this.head
  }

  printAllNode(){
    if(this.isEmpty()){
      console.log('큐가 비었습니다.');
      return
    } 

    let currentNode = this.head;

    while(currentNode !== null){
      console.log(currentNode);
      currentNode = currentNode.next;
    }

    console.log('headNode: ',this.head)
    console.log('tailNode: ',this.tail)
    console.log(`size: ${this.size}`)
  }
}

const queue = new Queue();

queue.enQueue(0)
queue.enQueue(1)
queue.enQueue(2)
queue.deQueue()
queue.deQueue()
queue.deQueue()
console.log(queue.peek())