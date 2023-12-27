import { Component } from '../core/zojo'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			taskItems: []
		}
	}
	async render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /* html */ `
      <ul class="taskItems"></ul>
    `
		const taskItemEl = this.el.querySelector('.taskItems')

		if (Array.isArray(this.state.taskItems)) {
			this.state.taskItems.forEach(taskItem => {
				const todoItem = new TodoItem({ taskItem })
				todoItem.render()
				taskItemsEl.append(todoItem.el)
			})
		}
		// this.state.taskItems.forEach(taskItem => {
		// 	const todoItem = new TodoItem({ taskItem })
		// 	todoItem.render()
		// 	taskItemsEl.append(todoItem.el)
		// })
	}
}
