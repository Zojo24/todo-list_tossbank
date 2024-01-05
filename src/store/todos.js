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

export const updateTodo = async update => {
	try {
		console.log(update)
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify({
					title,
					done
				})
			}
		)
		readTodo()
		window.location.reload()
	} catch (error) {
		console.log('upadteTodo error:', error)
	}
}
