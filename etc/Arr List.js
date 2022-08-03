let arr = [1,2,3,4,5]; // length 5
let maxSize = 5

function add(value) {  
  if(arr.length == maxSize){
    increase()
  }
  arr.push(value)
}

function addAt(value,index){
  if(arr.length == maxSize){
    increase()
  }
  arr.splice(index,0,value)
}

function remove(value){
  let removeIndex = arr.findIndex(num=>num == value)
  arr.splice(removeIndex,1)
}

function removeAt(index){
  arr.splice(index,1)
}

function get(index){
  return arr[index]
}

function getSize(){
  return arr.length
}

function isEmpty(){
  return arr.length == 0
}

function increase(){
  maxSize *= 2
}


console.log(arr)
console.log(maxSize)

add(6)
console.log(arr)
console.log(maxSize)

addAt(10,4)
console.log(arr)
console.log(maxSize)
