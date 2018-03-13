// 存入值至localStorage
export const setItem = (key, data) => localStorage.setItem(key,JSON.stringify(data))
// 根据key拿值
export const getItem = (key) => JSON.parse(localStorage.getItem(key))
// 根据key删除值
export const removeItem = key => localStorage.removeItem(key)
// 清除所有的缓存
export const removeAll = () => localStorage.clear()