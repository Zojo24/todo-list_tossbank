import { Component } from '../core/zojo'
import todoStore, { readTodo } from '../store/todos'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor() {
		super()
		todoStore.subscribe('task', () => this.render())
		todoStore.subscribe('due-date', () => this.render())
		todoStore.subscribe('status', () => this.render())
	}
	async render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /*html*/ `
				<div class="todo-list"></div>
    `
		await readTodo()
		// console.log(todoStore.state.todoItems)
		const todoListEl = this.el.querySelector('.todo-list')
		todoListEl.append(
			...todoStore.state.todoItems.map(
				todoItem => new TodoItem({ todoItem }).el
			)
		)
	}
}
