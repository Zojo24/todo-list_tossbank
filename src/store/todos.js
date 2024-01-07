import { Store } from '../core/zojo'

const store = new Store({
	todoItems: [],
	todoItem: {}
})

//항목 생성하기//
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
//항목 조회하기//
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
		console.log(result)
	} catch (error) {
		console.log('readTodo error:', error)
	}
}
//항목 수정하기//
export const updateTodo = async (id, title, done) => {
	try {
		console.log(id, title, done)
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

		window.location.reload()
	} catch (error) {
		console.log('upadteTodo error:', error)
	}
}
//항목 삭제하기//
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
//전체 삭제하기//
export const deleteAllTodo = async todoIds => {
	try {
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions`,
			{
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify({
					todoIds
				})
			}
		)
		// window.location.reload()
	} catch (error) {
		console.log('deleteAllTodo error:', error)
	}
}
