import { Component } from '../core/zojo'
import todoStore, { readTodo, deleteAllTodo } from '../store/todos'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor() {
		super()
		todoStore.subscribe('task', () => this.render())
		todoStore.subscribe('date', () => this.render())
		todoStore.subscribe('status', () => this.render())
	}
	async render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /*html*/ `
			<div class="filter">
				<button class="active">진행중 목록</button>
				<button class="completed">완료 목록</button>
				<button class="delete-all">전체삭제</button>
			</div>
			<div class="todo-item"></div>
    `
		await readTodo()
		const todoListEl = this.el.querySelector('.todo-item')
		todoListEl.append(
			...todoStore.state.todoItems.map(
				todoItem => new TodoItem({ todoItem }).el
			)
		)
		// 항목 완료 & 미완료 분류 //

		// let toggleValue = true
		// const completedButton = this.el.querySelector('.completed')
		// completedButton.addEventListener('click', event => {
		// 	console.log('c')
		// 	if (toggleValue) {
		// 		console.log('complete')
		// 		const todoListEl = this.el.querySelector('.todo-item')
		// 		todoListEl.append(
		// 			...todoStore.state.todoItems
		// 				.filter(status => status.done === 'false')
		// 				.map(todoItem => new TodoItem({ todoItem }).el)
		// 		)
		// 	} else {
		// 		console.log('Popover has been hidden')
		// 	}
		// 	toggleValue ? false : true
		// })

		// const completeButton = this.el.querySelector('.completed')
		// completeButton.addEventListener('toggle', (event) =>
		// 	todoListEl.append(
		// 		...todoStore.state.todoItems
		// 			.filter(status => status.done === 'false')
		// 			.map(todoItem => new TodoItem({ todoItem }).el)
		// 	)
		// )

		// await deleteAllTodo()
		// const todoIds =
	}
}
