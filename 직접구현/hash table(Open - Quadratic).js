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
    const initialIndex = index  
    let step = 1;
    
    while(this.table[index] !== undefined){
      console.log(`index: ${index}  value: ${value} 충돌 발생! 탐사 시작.`)

      index = (initialIndex + (step ** 2)) % this.size
      step++;
    }
  
    this.table[index] = [key,value];
    console.log(`index: ${index}  value: ${value} 저장 성공`)
    return; 
  }

  print(){
    console.log(this.table)
  }

}

const hashTable = new HashTable();
hashTable.add(0,'1')
hashTable.add(13,'2')
hashTable.add(26,'3')
hashTable.add(26,'3')
hashTable.add(26,'3')
hashTable.add(26,'3')
hashTable.add(26,'3')






hashTable.print()
