import { Component } from '../core/zojo'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor() {
		super()
	}
	render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /* html */ `
    `
	}
}
