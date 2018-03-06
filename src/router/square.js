import Square from '@/pages/square'
// 这里定义对应的路径,子路径定义在children里面
export default [
	{
		path: '/square',
		name: 'square',
		component: Square,
		children:[
			// {
			// 	path: '/example',
			// 	component: Example,
			// 	name: 'example'
			// }
		]
	}
]