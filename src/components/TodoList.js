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
				task: '해야하는 일',
				dueDate: '2023-12-28',
				status: '진행중',
				manager: 'Zoe'
			}
		]
		todos.forEach(todo => {
			const todoItem = new TodoItem(todo)
			todoItemsEl.append(todoItem.el)
		})
	}
}
