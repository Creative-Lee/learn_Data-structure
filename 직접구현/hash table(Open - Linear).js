function getHash(numberKey, maxTableSize){
  const hash = numberKey % maxTableSize

  return hash
}

class HashTable{
  constructor(size){
    this.size = size ?? 13
    this.table = new Array(this.size)
  }  

  add(key, value){
    if(!this.table.includes(undefined)){
      console.log("table이 꽉 찼습니다.")
      return
    }

    let index = getHash(key, this.size) 

    while(this.table[index] !== undefined){
      console.log(`index: ${index}  value: ${value} 충돌 발생! 탐사 시작.`)
      index = (index + 1) % this.size      
    }
  
    this.table[index] = [key,value];
    console.log(`index: ${index}  value: ${value} 저장 성공`)    
  }

  remove(key){       
    let isInBucket = this.table.find(arr => arr[0] === key) // table의 모든 key-value arr를 순회함 --> hash table의 의미가 없다. 
    let index = getHash(key,this.size);

    if(!isInBucket){
      console.log(`제거 실패 : bucket에 해당 key가 없음`)
      return false
    }

    if(this.table[index] === undefined){
      console.log(`제거 실패 : 해당 hash 비어있음`)
      return false;
    } 

    console.log(`제거 성공`)
    this.table.splice(index,1,'deleted')
      
    return true 
  }

  lookup(key){
    let isInBucket = this.table.find(arr => arr[0] === key)  // table의 모든 key-value arr를 순회함 --> hash table의 의미가 없다. 
    let index = getHash(key, this.size);

    if(!isInBucket){
      console.log(`탐색 실패 : bucket에 해당 key가 없음`)
      return false
    }

    if(this.table[index] === undefined){
      console.log(`탐색 실패 : 해당 hash 비어있음`)
      return false;
    } 

    console.log(`탐색 성공`)
      return this.table[index];
  }


  printTable(){
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

hashTable.remove(1100)
hashTable.remove(11111)

console.log(hashTable.lookup(1100))

hashTable.printTable()
