import { Component } from '../core/zojo'
import TodoList from '../components/TodoList'

export default class Home extends Component {
	render() {
		const todoList = new TodoList().el

		this.el.classList.add('container', 'the-item')
		this.el.innerHTML = /*html*/ `
			<div class="task"></div>
			<div class="due-date"></div>     
		`
		this.el.append(todoList)
	}
}
