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

const a = () => {
  // coding here ...
}

const a = (params1, params2) => {
  // coding here ... 
}

const a = params => {
  // coding here ...
}
const a = parmas => console.log('exec a func!')