## 概述

每行代码应该看起来是由一个人编写的，不管贡献者的数量如何;

* 不要写分号，除非必要

```js
let a = 1

(function() {

})()
```

* 使用 `let` 或 `const` 代替 `var`

```javascript
// bad
var a = 1
var APP_PATH = '...'

// good
let a = 1
const APP_PATH = '...'
```

### Object

* 使用字面量语法创建对象，而不是 `new`

```javascript
// bad
let obj = new Object()

// good
let obj = {}
```

* 使用简写方式定义对象方法

```javascript
// bad
const store = {
  add: function() {
    ...
  }
}

// good
const store = {
  add() {
    ...  
  }
}
```

* 定义属性时，能简写的使用简写方式

```javascript
const username = 'Cui Yang'

// bad
const obj = {
  username: username
}

// good
const obj = {
  username
}
```

* 将简写属性放在一起

```javascript
const username = 'Cui Yang'
const email = 'cuiyang673308817@gmail.com'

// bad
const obj = {
  username,
  age: 27,
  email,
  profession: 'FE'
}

// good
const obj = {
  username,
  email,
  age: 27,
  profession: 'FE'
}
```

* 对象的属性名不需要打引号，除非必要时

```javascript
// bad
const obj = {
  'foo': 1,
  'bar': 2,
  'data-blah': 3
}

// good
const obj = {
  foo: 1,
  bar: 2,
  'data-blah': 3
}
```

### 总要使用带类型判断的比较判断
* 总是使用 === 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。

### 尽量不要使用 switch
* switch 在所有的编程语言中都是个非常错误的难以控制的语句，建议用 if else 来替换它。

### 能使用三元条件判断替代if,尽量使用三元运算符
* 用三元操作符分配或返回语句。在比较简单的情况下使用，避免在复杂的情况下使用。没人愿意用 10 行三元操作符把自己的脑子绕晕。
