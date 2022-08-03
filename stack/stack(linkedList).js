class Node{
  constructor(value){
    this.value = value;
    this.next = null;    
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(value){
    const newNode = new Node(value)

    newNode.next = this.top
    this.top = newNode;    
    this.size++;
  }

  pop(){
    if(this.isEmpty()){
      console.log('리스트가 비어있습니다.');
      return
    }
    
    const deletedNode = this.top

    this.top = this.top.next
    deletedNode.next = null;  
    this.size--;

    return deletedNode;
  }

  peek(){
    return this.top
  }

  isEmpty(){
    return !this.top
  }

  printAllNode(){
    if(this.isEmpty()){
      console.log('리스트가 비어있습니다.');
      return
    }

    let currentNode = this.top;
    
    while(currentNode != null){
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const stack = new Stack();

stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.printAllNode()
