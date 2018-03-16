#服务器使用详解

1.启动
```
  yarn server / npm server // 使用两个其中的一个去启动express服务器服务,监听端口为3000
```
2.在需要本地模拟器数据的时候需要在server/api/你的路径/文件名.json配置
```
示例：
{
  "path": "",
  "delay": 500,
  "name": "",
  "description": "",
  "isPaging": false,
  "datasource": "success.data",
  "responseName": "success",
  "response": {
    "success": {
      "retcode": "2000000",
      "msg": "成功",
      "data":{
        // 这里替换返回的数据～
      }
    },
    "failure": {
      "code": "201",
      "status": "FAILURE",
      "message": "服务异常"
    }
  }
}
```
3.在src/api.js里面配置你的路径
```
示例：
  'getData': '/api/get/data' // 最后一个路径名问json文件的名称，其余会被解析为文件夹的形式
```
4.在services里面配置一个对应调用请求的方法
```
示例：
export const getExample = (params = {}) => http.get(apis.getExampleData, params)  // 根据后台决定是用get方法还是post方法

```
5.在页面导入这个方法，之后使用，用then拿到数据,catch捕获错误
```
示例：
  import { getExample } from 'services' // 导入方法
  // 在需要的地方使用方法，如果有参数就传入
  let params = {}
  getExample( params // 这里是参数的位置).then(res => {
         console.log(res) // 这里拿到了数据
  })
```