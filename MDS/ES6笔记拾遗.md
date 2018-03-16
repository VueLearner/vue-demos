## ES6笔记拾遗

> 这里是按记忆写的一些es6语法的笔记

- let、const
- 箭头函数
- 解构
- Promise
- rest运算符
- Async、Await
- Generator
- 模版字符串(``)
- Map、Filter、Reduce
- 装饰器 

> 以下根据目录顺序整理的一些代码和讲解

- [x] let、const
  - 在es5或以前，由于JavaScript并没有作用域这一说法，而*var* 生命的变量由于有变量提升的弊端，导致代码不按正常逻辑运行，结果出错

    ```js
    function demo () {
      var i = 0
      for (var i = 0 ; i < 5 ; i ++ ) {
        console.log(i) // i被循环了5次
      }
      console.log(i) // 输出5，如果你期待的i是0,这里的结果并不是你想要的
    }
    ```

    *原因在于for里面的i被提升到了function的第一行生命，变成了共享的全局变量*

    es6改进版

    ```js
    function demo () {
      let i = 0
      for (let i = 0 ; i < 5 ; i ++ ) {
        console.log(i) // i被循环了5次
      }
      console.log(i) // 输出0，for循环里面被限制在了{}块级作用域里面
    }
    ```

    ##### let出现解决的问题就在于解决了js没有作用域的这个情况

    ​

  - 由于JS对语法限制不多，所以在一个变量被赋值以后可以二次赋值改变原值，es6用const做了一个限制

    ```js
    var a = 0
        console.log('inital value:' + a)
        a = 1
        console.log('after change:' + a)

    const a = 0
       	  a = 1 // 报错
    ```

    ##### 如果一个变量用const赋值的话等于就是常量（不可改变）二次赋值会报错

    ​

  ​


- [x] 箭头函数

  * 由于JS的作用域被function的大括号限制了，所以有时this指向需要hack一下（指定对象）

    例子

    ```js
    const a = {
      val: 1,
      show() {
        console.log(this.val)// 输出 1
        function inner() {
          console.log(this.val) // undefined
        }
        inner()
      }
    }

    a.show() 
    ```

    *由于inner方法是另一个function生命的函数，形成了内部闭包的性质,this指向仅仅为inner内部*

    #####解决方案

    ```js
    const a = {
      val: 1,
      show() {
        console.log(this.val)// 输出 1
        let inner = () => {
          console.log(this.val) // 输出 1
        }
        inner()
      }
    }

    a.show()
    ```

    ##### 利用 => 声明一个匿名函数，由于匿名函数没有作用域，所以this指向依然为const a，同样，在代码的写法上也有许多简便版

    ```js
    // 正常版
    const a = () => {
      // coding here ...
    }
    // 接收两个及以上的参数时
    const a = (params1, params2) => {
      // coding here ... 
    }
    // 只有一个参数时
    const a = params => {
      // coding here ...
    }
    // 只有一句执行语句时
    const a = () => console.log('exec a func!') 
    // 或者可以返回一些值可以省略return
    const a = () => true // true的位置可以反回变量或者表达式

    ```

    ​

     

- [x] 解构

  - 由于某些时候需要取对象或者数组单个值的时候而又不改变原来的值的情况下

    例子

    ```js
    let a = {
      name: 'Frank',
      age: 1
    }
    console.log(a.age) // 1
    let age = a.age // 每次取值都需要从a对象去查找，且不明了清晰
    let name = a.name

    ```

    改善

    ```js
    let { age, name} = a // 从对象中拿出对应的属性值
    // 类似于下面
    let age, name
    age = a.age
    name = a.name 
    ```

    ##### 解构的出现大大简化了代码，且代码的简洁度提升，当你需要导入某个对象的某个值时，使用解构吧

    ​

- [x] Promise

  - 终极异步处理器，Promise，分为resovle(成功),reject(失败)两种情况，axios便用Promise实现

    ```Js
    let func = (condition) => {
      return new Promise((resolve, reject) => {
       if (condition) { // 代码执行的一些判断逻辑
         resolve('success!')
       } else {
         reject('failed')
       }
     })
     }
     func(true).then(res => {
       console.log(res) // 输出success!  
     }).catch(err => {
       console.log(err) // 输出error!
     })
    ```

    ##### 注意：如果不调用resolve或reject方法去终止一个Promise的话，那么它会一直处于Pending状态

    ##### 一些Promise内置api

    - Promise.all([ ]) // 执行数组内部全部Promise请求
    - Promise.race([ ]) // 两个或多个Promise请求谁先执行完便终止其他执行
    - etc...
    - 详情请百度阮一峰es6语法详情

- [x] rest运算符（扩展运算符）

  - 当需要取数组里的少部分值和剩下所有值的时候，rest／扩展运算符便派上了用场

    ```js
    // 数组中的运用
    const a = [1, 2, 3, 4, 5, 6, 7]
    let [val1, val2, ...rest] = a
    console.log(val1)
    console.log(val2)
    console.log(rest)
    ```

    ```javascript
    // 对象中的运用
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
    ```

    ```javascript
    // 在方法的参数接收上特别好使
    function demo(...args) {
      console.log(args) // 所有的参数
    }
    ```

    ​

- [x] Async、Await

  - 处理异步函数的终极杀器

    *当需要等待异步函数执行结果的时候，可以使用Async去让异步变同步* 

    ```Js
    function a () {
      let val = 1
      setTimeout(() => {
        val = 2
      },1000)
      console.log(val) // 输出1
    }

    ```

    *当期待值为val改变后的值时就容易出错，特别是在进行Ajax请求的时候*

    ```js
    function a () {
      let list = []
      ajax().then(res => {
        list = res.data
      })
      console.log(list) // list依然为空
    }
    ```

    是时候用上我们的大杀器了～

    ```Js
    async function a () {
      let list = []
      await ajax().then(res => {
        list = res.data
      })
      console.log(list) // list被赋值
    }
    ```

    ##### await等待某个异步函数执行完毕以后再继续执行下面的代码（必须用在由 async生命的函数中！！！）

    ​

- [x] Generator

  - 把整体化成一步步执行，实现Async、  Await的关键语法糖

    ```js
    function* demo () {
      var i = 0
      yield ++i
      if(i > 2) {
        return i
      } else {
        demo()
      }
    }
    let exec = demo()
    console.log(exec.next()) // 执行一步demo {done: false, value: 1}

    // 循环出所有可循环的generator
    for(let val of exec) {
      console.log(val)
    }





    ```

    ​

- [x] 模版字符串

  - 在字符串里面插入一个变量输出

    ```Js
    let val = 123456
    let str = `变量的值为：${val}`
    console.log(str)
    ```

    ##### 在使用了反引号的字符串里面必须使用变量！否则语法报错！

- [x] Map、Filter、Reduce

  - Map（返回一个数组的映射，类似copy数组）

    ```Js
    let arrA = [1, 2, 3, 4]
    let arrB = arrA.map(item => item * 2)
    console.log(arrB) // [2, 4, 6, 8]
    ```

  - Filter(根据条件过滤不符合条件的值，返回数组)

    ```js
    let arrA = [1, 2, 3, 4]
    let arrB = arrA.filter(item => item > 2)
    console.log(arrB) // [3, 4]
    ```

    ​

  - Reduce(由初始值遍历数组，返回全部的和)

    ```js
    let arrA = [1, 2, 3, 4]
    let count = arrA.reduce((total, item )=> {
      return total + item
    })
    console.log(count) // 10
    ```

    *你还可以在匿名函数传入一个初始值*

    ```js
    let arrA = [1, 2, 3, 4]
    let count = arrA.reduce((total, item )=> {
      return total + item
    }, 10) // 传入初始值，第一次total的值为10
    console.log(count) // 20
    ```

    ​

- [ ] 装饰器