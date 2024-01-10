import { Store } from '../core/zojo'

const store = new Store({
	tasks: {},
	status: {},
	todoItems: [],
	todoItem: {},
	loading: false
})

export default store

//항목 생성하기//
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
		readTodo()
	} catch (error) {
		console.log('createTodo error:', error)
	}
}
//항목 조회하기//
export const readTodo = async () => {
	store.state.loading = true
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
		console.log(store.state.todoItems)
		store.state.loading = false
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
		readTodo()
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
		readTodo()
	} catch (error) {
		console.log('deleteTodo error:', error)
	}
}
//완료항목 일괄 삭제하기//
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
		readTodo()
		// window.location.reload()
	} catch (error) {
		console.log('deleteAllTodo error:', error)
	}
}
//항목 순서바꾸기//
export const reorderTodo = async todoIds => {
	try {
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder`,
			{
				method: 'PUT',
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
		readTodo()
	} catch (error) {
		console.log('reorderTodo error:', error)
	}
}
