//API POST//
export async function createTodo(taskInput, dateInput) {
	const parameter = taskInput.value + '##' + dateInput.value

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
				title: parameter,
				order: ''
			})
		}
	)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`)
			}
			return response.json()
		})
		.then(() => {
			window.location.reload()
		})
		.catch(error => console.error('Fetch Error:', error))
}

//API DELETE//

export async function deleteTodo(todoId) {
	console.log(todoId)
	const res = await fetch(
		'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/' + todoId,
		{
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				apikey: 'KDT7_GrZ1eYBo',
				username: 'KDT7_ChoiHongJoo'
			}
		}
	)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`)
			}
			return response.json()
		})
		.then(() => {
			window.location.reload()
		})
		.catch(error => console.error('Fetch Error:', error))
}

//API GET//
export async function readTodo() {
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

	return res
}
