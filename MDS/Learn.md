#学习笔记



 ##es6/7语法
   ####1.解构
      ```
      
      ```
   ####Promise、Async，Await(解决异步逻辑问题)
   ```
    async created() {
          // getExample().then(res => {
          //   console.log(res)
          // })
          let flag ;
          await this.example('a').then(res => {
    	      flag = true
          }).catch(error => {
          	flag = false
          })
          console.log(flag)
          if (flag) return true
        }
        
        
    example(prop) {
    
          	return new Promise((resolve, reject) => {
          		if (prop === 'a') {
          			resolve('success')
              } else {
          			reject('failed')
              }
            })
          }
   ```
      
 ##原理
   ####1.同步异步 
    ```
        let i = 0
                for( ; i < 10000000000 ; i++ ) {
        
                }
                setTimeout(() => console.log('程序花了' + i + 's执行到这里')
                , 0)
                setInterval(() => {
        
                }, 0)
    ```