import { Component } from './core/zojo';

export default class App extends Component {
	constructor() {
		super();
	}
	render() {
		this.el.textContent = 'Hello world';
	}
}
