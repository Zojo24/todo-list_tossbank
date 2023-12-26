import { Component } from './core/zojo'
import TodoItem from './components/TodoItem'

export default class App extends Component {
	constructor() {
		super({ tagName: 'div', className: 'app-container' })
	}

	render() {
		const routerView = document.createElement('router-view')

		const todoItem = new TodoItem()

		this.el.append(routerView, todoItem.el)
		document.querySelector('#root').append(this.el)
	}
}
