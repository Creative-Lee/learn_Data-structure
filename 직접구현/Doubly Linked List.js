class Node{
  constructor(value){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(value){
    const newNode = new Node(value)

    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;      
    }
    else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    
    this.size++;    
  }

  add(value){
    const newNode = new Node(value)

    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;     
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode;
    }
    
    this.size++;
  }

  addAt(value,index){
    const lastIndex = this.size;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`);
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
    const currentNode = this.get(index);
    const beforeNode = currentNode.prev;

    beforeNode.next = newNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;
    newNode.prev = beforeNode;
    this.size++;
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
      return this.shift();
    }
    
    if(index === lastIndex){
      return this.pop();
    }

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.size--;

    return removedNode;
  }

  shift(){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }
    
    const deletedNode = this.head;

    if(this.size === 1){
      this.head = null;
      this.tail = null;  
    }
    else{
      this.head = this.head.next;
      this.head.prev = null;
      deletedNode.next = null;      
    }
    
    this.size--;
    return deletedNode;
  }

  pop(){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }

    const deletedNode = this.tail;

    if(this.size === 1){
      this.head = null;
      this.tail = null;  
    }
    else{
      this.tail = this.tail.prev;
      this.tail.next = null;
      deletedNode.prev = null;      
    }
    
    this.size--;
    return deletedNode;
  }

  get(index){
    const lastIndex = this.size - 1;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`);
      return
    }

    let currentNode;
    let indexCount;

    if(index <= (lastIndex / 2)){
      indexCount = 0;
      currentNode = this.head;

      while(indexCount !== index){
        currentNode = currentNode.next;
        indexCount++;
      }    
    }
    else{
      indexCount = lastIndex;
      currentNode = this.tail;

      while(indexCount !== index){
        currentNode = currentNode.prev;
        indexCount--;
      }
    }
    
    return currentNode;
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

let doubly = new DoublyLinkedList();
doubly.add(0)
doubly.shift()

doubly.printAllNode()

