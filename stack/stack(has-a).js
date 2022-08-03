class Node{
  constructor(value){
    this.value = value;  
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }  

  add(value){
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

  addAt(value,index){
    const lastIndex = this.size;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`)
      return
    }

    if(index === 0){
      this.addFirst(value);
      return
    }
    if(index === lastIndex){
      this.add(value);
      return
    }

    const newNode = new Node(value);  
    const beforeNode = this.get(index - 1)

    newNode.next = beforeNode.next
    beforeNode.next = newNode;    
  }

  remove(value){
    if(this.isEmpty()){
      console.log('노드가 없습니다.')
      return
    }

    let currentNode = this.head;
    let indexOfValue = null;

    for(let i = 0; i < this.size; i++){
      if(currentNode.value == value){
        indexOfValue = i;
        break;
      }

      currentNode = currentNode.next;
    }

    if(indexOfValue === null){
      console.log(`${value}를 찾을 수 없습니다.`);
      return
    }

    this.removeAt(indexOfValue);
  }

  removeAt(index){
    if(this.isEmpty()){
      console.log('노드가 없습니다.')
      return
    }

    const lastIndex = this.size - 1;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`);
      return
    }
    
    if(index === 0){
      return this.removeFirst();
    }
    
    if(index === lastIndex){
      return this.removeLast();
    }

    const removedNode = this.get(index);
    const beforeNode = this.get(index - 1);

    beforeNode.next = removedNode.next;
    removedNode.next = null;

    return removedNode
  }

  removeFirst(){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }

    const removedNode = this.head;

    if(this.size === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next
      removedNode.next = null
    }  
  
    this.size--;
    return removedNode
  }

  removeLast(){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }

    const removedNode = this.tail;

    if(this.size === 1){
      this.head = null;
      this.tail = null;      
    }
    else{
      const lastIndex = this.size - 1  
      const beforeNode = this.get(lastIndex - 1)
      
      beforeNode.next = null;
      this.tail = beforeNode;
      removedNode.next = null;   
    }

    this.size--;
    return removedNode
  }

  get(index){
    const lastIndex = this.size - 1;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`);
      return
    }

    if(index === 0){
      return this.head;
    }
    if(index === lastIndex){
      return this.tail
    }

    let currentNode = this.head;
    let indexCount = 0;
    while(indexCount !== index){
      currentNode = currentNode.next;
      indexCount++;
    }

    return currentNode
  }

  isEmpty(){
    return !this.head
  }
  
  printAllNode(){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
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

class Stack{
  constructor(){
    this.list = new LinkedList()
  }

  push(value){    
    this.list.add(value)
  }
  pop(){
    return this.list.removeLast();
  }
  peek(){
    return this.list.tail
  }
  isEmpty(){
    return this.list.isEmpty();
  }
}

const stack = new Stack();

stack.push(0)
stack.push(1)
stack.push(2)
stack.pop()
stack.pop()
stack.pop()

console.log(stack)
console.log(stack.list)