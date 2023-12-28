import { Component } from '../core/zojo'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor() {
		super()
	}
	render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /* html */ `
			<ul class="todo-items"></ul>
		`

		const todoItemsEl = this.el.querySelector('.todo-items')
		const todos = [
			{
				title: '',
				order: ''
			}
		]
		todos.forEach(todo => {
			const todoItem = new TodoItem(todo)
			todoItemsEl.append(todoItem.el)
		})
	}
}
