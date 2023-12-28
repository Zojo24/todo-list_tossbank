//POST//
export default class CRUD {
	async createTodo() {
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify({
					title: '',
					order: ''
				})
			}
		)
		const json = await res.json()
		console.log(json)

		return json
	}
	//GET//
	async readTodo() {
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
			{
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
		const json = await res.json()
		console.log(json)

		return json
	}

	//PUT//
	async updateTodo(todoId, updateData) {
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId',
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify(updateData)
			}
		)
		const json = await res.json()
		console.log(json)

		return json
	}

	//DELETE//
	async deleteTodo(todoId) {
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId',
			{
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
		const json = await res.json()
		console.log(json)

		return json
	}
}
