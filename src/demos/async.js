function a () {
  let val = 1
  setTimeout(() => {
    val = 2
  },1000)
  console.log(val) // 输出1
}