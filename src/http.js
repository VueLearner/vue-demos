import axios from 'axios'

// 默认的路径
axios.defaults.baseURL = 'http://localhost:3000';
// 允许跨域情况下携带cookie
axios.defaults.withCredentials = true
// 设置超时时间
axios.defaults.timeout = 100000
// 标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// // axios拦截器
axios.interceptors.response.use(response => {
    // 处理返回的数据，直接返回data
	if (response.data.retcode === 2000000 || response.data.retcode === '2000000') {
		return response.data.data || response.data
	}
	else {
		throw Error(response.data.msg || '服务异常')
	}
})

export default axios
