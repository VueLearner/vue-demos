let func = new  Promise((resolve, reject) => {
  if (condition) { // 代码执行的一些判断逻辑
    resovle('success!')
  } else {
    reject('failed')
  }
})

func().then(res => {
  console.log(res) // 输出success!  
}).catch(err => {
  console.log(err) // 输出error!
})