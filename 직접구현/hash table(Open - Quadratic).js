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
      // 1 4 9 16 ... 순으로 증가하는 index, 리스트의 끝보다 큰값이면 맨 앞부터 다시 탐색하기 위해 this.size를 나눴지만 
      // 특정 숫자가 (10 12 3 9 4 1 0 이후 역순으로 반복) 반복되며 무한루프
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
hashTable.add(1,'2')
hashTable.add(10,'3')
hashTable.add(11,'4')
hashTable.add(100,'5')





hashTable.print()
