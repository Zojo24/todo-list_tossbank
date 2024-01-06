import { Component } from '../core/zojo'
import todoStore, { readTodo } from '../store/todos'
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
		// console.log(todoStore.state.todoItems)
		const todoListEl = this.el.querySelector('.todo-item')
		todoListEl.append(
			...todoStore.state.todoItems.map(
				todoItem => new TodoItem({ todoItem }).el
			)
		)
	}
}
