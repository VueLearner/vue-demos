import Plant from '@/pages/planet'
// 这里定义对应的路径,子路径定义在children里面
export default [
	{
		path: '/planet',
		name: 'planet',
		component: Plant,
		children:[
			// {
			// 	path: '/example',
			// 	component: Example,
			// 	name: 'example'
			// }
		]
	}
]