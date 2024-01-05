import { Store } from '../core/zojo'

const store = new Store({
	todoItems: [],
	todoItem: {}
})

export default store
export const createTodo = async title => {
	try {
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`,
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify({
					title
				})
			}
		)
		window.location.reload()
	} catch (error) {
		console.log('createTodo error:', error)
	}
}

export const readTodo = async () => {
	try {
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`,
			{
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
		const result = await res.json()
		store.state.todoItems = result
	} catch (error) {
		console.log('readTodo error:', error)
	}
}

export const deleteTodo = async id => {
	try {
		console.log(id)
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
			{
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
		window.location.reload()
	} catch (error) {
		console.log('deleteTodo error:', error)
	}
}

//API PUT//
export async function updateTodo(id, task, date, select) {
	const parameter = task + '##' + date
	const res = fetch(
		'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}',
		{
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				apikey: 'KDT7_GrZ1eYBo',
				username: 'KDT7_ChoiHongJoo'
			},
			body: JSON.stringify({
				title: parameter,
				done: select
			})
		}
	)
	console.log('end')

	return res
}
