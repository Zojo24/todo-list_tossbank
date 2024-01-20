import { customFetch } from '../../utils/fetchUtils'
import { Store } from '../core/zojo'

const store = new Store({
	todoItems: [],
	todoItem: {},
	loading: false
})

export default store

//항목 생성하기//
export const createTodo = async title => {
	try {
		await customFetch(`/`, {
			method: 'POST',
			body: JSON.stringify({
				title
			})
		})
		readTodo()
	} catch (error) {
		console.log('createTodo error:', error)
	}
}
//항목 조회하기//
export const readTodo = async () => {
	store.state.loading = true
	const response = await customFetch(`/`, {
		method: 'GET'
	})
	store.state.todoItems = response
	store.state.loading = false
}
//항목 수정하기//
export const updateTodo = async (id, title, done) => {
	await customFetch(`/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			title,
			done
		})
	})
	readTodo()
}
//항목 삭제하기//
export const deleteTodo = async id => {
	await customFetch(`/${id}`, {
		method: 'DELETE'
	})
	readTodo()
}
//완료항목 일괄 삭제하기//
export const deleteAllTodo = async todoIds => {
	await customFetch(`/deletions`, {
		method: 'DELETE',
		body: JSON.stringify({
			todoIds
		})
	})
	readTodo()
}
//항목 순서바꾸기//
export const reorderTodo = async todoIds => {
	await customFetch(`/reorder`, {
		method: 'PUT',
		body: JSON.stringify({
			todoIds
		})
	})
}
