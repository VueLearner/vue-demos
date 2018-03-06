import Message from '@/pages/message'
// 这里定义对应的路径,子路径定义在children里面

export default [
	{
		path: '/message',
		name: 'message',
		component: Message,
		children:[
      // {
			// 	path: '/example',
			// 	component: Example,
			// 	name: 'example'
			// }
		]
	}
]