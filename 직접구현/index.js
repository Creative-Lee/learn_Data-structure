function getHash(numberKey, maxTableSize){
  const hash = numberKey % maxTableSize

  return hash
}

function getProbingStepHash(numberKey){
  const ProbingStepHash = 11 - (numberKey % 11)

  return ProbingStepHash
}

class HashTable{
  constructor(size){
    this.size = size;
    this.table = new Array(this.size)
  } 

  print(){
    console.log(this.table)
  }

  add(key, value){
    let index = getHash(key, this.size)
    
    while(true){
      if(this.table[index] === undefined){
        this.table[index] = value;
        console.log(`${index}번 index에 ${value} 저장 성공`)
        return;
      }

      if(!this.table.includes(undefined)){
        console.log("table이 꽉 찼습니다.")
        return
      }

      console.log(`${index}번 index에 ${value} 저장중 충돌 발생`)
      
      /* 선형탐사 */
      // index += 1 

      /* 제곱탐사 */

      /* 이중해싱 */
      index += getProbingStepHash(key)     

      if(index >= this.size){
        index -= this.size
      }     
    }
  }

}

const hashTable = new HashTable(13);
hashTable.add(1,'1')
hashTable.add(11,'2')
hashTable.add(111,'3')
hashTable.add(1111,'4')
hashTable.add(1,'5')
hashTable.add(2,'6')
hashTable.add(3,'7')
hashTable.add(4,'8')
hashTable.add(5,'9')
hashTable.add(6,'10')
hashTable.add(123,'11')
hashTable.add(1235,'12')
hashTable.add(1236,'13')
hashTable.print()
