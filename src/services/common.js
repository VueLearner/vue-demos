import apis from '../api'
import http from '../http'
// 获取例子接口
export const getExample = (params = {}) => http.get(apis.getExampleData, params) // 极度简化代码的形式

// es5的写法
// export function getExample(params = {}) {
//   return http.get(apis.getExampleData, params)
// }
// es6的写法
// export const getExample = (params = {}) => {
//   return http.get(apis.getExampleData, params)
// }