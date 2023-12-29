import { Component } from '../core/zojo'
import TodoList from '../components/TodoList'

export default class Home extends Component {
	render() {
		const todoList = new TodoList().el

		this.el.classList.add('container')
		this.el.append(todoList)
	}
}
