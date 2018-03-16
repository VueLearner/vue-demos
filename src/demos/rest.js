const a = [1, 2, 3, 4, 5, 6, 7]
let [val1, val2, ...rest] = a
console.log(val1) // 1
console.log(val2) // 2
console.log(rest) // 3 4 5 6 7


const obj = {
  name: 'Frank',
  age: 10,
  grade: 12,
  geneder: 'male'
}

let { name, age, ...rest } = obj
console.log(name) // Frank
console.log(age) // 10
console.log(rest) // { grade: 12, gender: 'male' }
