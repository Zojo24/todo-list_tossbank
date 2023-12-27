export default class TodoAPI {
	//POST//
	async function createTodo() {
		const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'apikey': 'KDT7_GrZ1eYBo',
				'username': 'KDT7_ChoiHongJoo'
			},
			body: JSON.stringify({
			})
		})
		const json = await res.json()
		console.log(json)
	
		return json
	}

	//GET//
	async function readTodo() {
		const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'apikey': 'KDT7_GrZ1eYBo',
				'username': 'KDT7_ChoiHongJoo'
			}
		})
		const json = await res.json()
		console.log(json)
	
		return json
	}

	//PUT//
	async function updateTodo() {
		const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				'apikey': 'KDT7_GrZ1eYBo',
				'username': 'KDT7_ChoiHongJoo'
			},
			body: JSON.stringify({
			})
		})
		const json = await res.json()
		console.log(json)
	
		return json
	}

	//DELETE//
	async function deleteTodo() {
		const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId', {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				'apikey': 'KDT7_GrZ1eYBo',
				'username': 'KDT7_ChoiHongJoo'
			},
		})
		const json = await res.json()
		console.log(json)
	
		return json
	}
}