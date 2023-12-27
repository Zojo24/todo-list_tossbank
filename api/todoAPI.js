export default class TodoAPI {
	//POST//
	async createTodo() {
		const requestBody = {
			title: 'Todo List',
			order: 1
		}
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify(requestBody)
			}
		)
		const json = await res.json()
		console.log(json)

		return json
	}
}
