import Plant from '@/pages/plant'
// 这里定义对应的路径,子路径定义在children里面
export default [
	{
		path: '/plant',
		name: 'plant',
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