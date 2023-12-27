import { Component } from '../core/zojo'
import TodoList from '../components/TodoList'

export default class Home extends Component {
	async render() {
		this.el.innerHTML = '<h1>Todo List</h1>'

		const todoListComponent = new TodoList()
		await todoListComponent.render()
		this.el.append(todoListComponent.el)
	}
}
