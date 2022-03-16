function getHash(numberKey, maxTableSize){
  const hash = numberKey % maxTableSize

  return hash
}

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
      return this.removeFisrt();
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

  removeFisrt(){
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


class HashTable{
  constructor(maxTableSize){
    this.table = [];
    this.maxTableSize = maxTableSize ?? 13
  }  

  add(key, value){
    const index = getHash(key, this.maxTableSize); 
    const keyValuePair = {key, value} 

    if(this.table[index] === undefined){
      const list = new LinkedList();
      list.addFirst(keyValuePair)

      this.table[index] = list;
    }
    else{
      this.table[index].addFirst(keyValuePair)
    }
  }

  remove(key){
    const index = getHash(key, this.maxTableSize); 
    let targetList = this.table[index]

    if(targetList === undefined){         // key에 해당하는 index에 list가 있는지 확인
      console.log('삭제 실패 : key 오류')
      return false;
    }    

    let currentPair = targetList.head.value
    let indexOfValue = null;

    for(let i = 0; i < targetList.size; i++){ // 있다면 해당 list에 param key를 가진 pair가 있는지 확인하고 index 저장
      if(currentPair.key === key){
        indexOfValue = i;
        break;
      }

      currentPair = currentPair.next;    
    }

    ㅡㅡㅡㅡ
    
    // if(targetList.size === 1 && currentPair.key === key){
    //   console.log('삭제 성공')
    //   delete this.table[index]
    //   return           
    // }   
    
  }

  print(){
    console.log(this.table)
  }
}

const hashTable = new HashTable();
hashTable.add(0,'1')
hashTable.add(1,'2')
hashTable.add(10,'3')
hashTable.add(11,'4')
hashTable.add(100,'5')
hashTable.add(101,'6')
hashTable.add(110,'7')
hashTable.add(111,'8')
hashTable.add(1000,'9')
hashTable.add(1001,'10')
hashTable.add(1010,'11')
hashTable.add(1011,'12')
hashTable.add(1100,'13')





hashTable.print()
