import { Component } from './core/zojo'
import TodoItem from './components/TodoItem'

export default class App extends Component {
	constructor() {
		super({ tagName: 'div', className: {} })
	}
	render() {
		const todoItem = new TodoItem()
		this.el.append(todoItem.el)
		document.querySelector('#root').appendChild(this.el)
	}
}
