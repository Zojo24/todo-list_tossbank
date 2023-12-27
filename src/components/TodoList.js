import { Component } from '../core/zojo'
import TodoItem from './TodoItem'
// import CRUD from '/api/todoAPI'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			taskItems: []
		}
	}
	async createTodo() {
		console.log('Creating Todo List')
	}
	async render() {
		this.el.classList.add('todo-item')
  }
  const taskItemsEl = this.el.querySelector('.taskItems')

  if (Array.isArray(this.state.taskItems)) {
    for (const taskItem of this.state.taskItems) {
      const todoItem = new todoItem({ taskItem })
      await todoItem.render()
      taskItemsEl.append(todoItem.el)
    }
  }
}
