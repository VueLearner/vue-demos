import User from '@/pages/user'

// 这里定义对应的路径,子路径定义在children里面

export default [
	{
		path: '/user',
		name: 'user',
		component: User,
		children:[
			// {
			// 	path: '/example',
			// 	component: Example,
			// 	name: 'example'
			// }
		]
	}
]