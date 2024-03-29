import { Component } from '../core/zojo'
import Headline from '../components/Headline'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

export default class Home extends Component {
	render() {
		const headline = new Headline().el
		const addTodo = new AddTodo().el
		const todoList = new TodoList().el

		this.el.classList.add('container')
		this.el.innerHTML = /*html*/ `
		<div class="home-wrapper"></div>
		`
		const homeWrapper = this.el.querySelector('.home-wrapper')
		homeWrapper.append(headline, addTodo, todoList)
	}
}
