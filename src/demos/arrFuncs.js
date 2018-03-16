let arrA = [1, 2, 3, 4]
let arrB = arrA.map(item => item * 2)
console.log(arrB) // [2, 4, 6, 8]

let arrA = [1, 2, 3, 4]
let arrB = arrA.filter(item => item > 2)
console.log(arrB) // [3, 4]

let arrA = [1, 2, 3, 4]
let count = arrA.reduce((total, item )=> {
  return total + item
}, 10)
console.log(count) // 10