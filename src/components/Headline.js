import { Component } from '../core/zojo'

export default class Headline extends Component {
	render() {
		this.el.classList.add('headline')
		this.el.innerHTML = /*html*/ `
      <h1>toss bank Todo List</h1> <br />
    `
	}
}
