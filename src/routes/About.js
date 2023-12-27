import { Component } from '../core/zojo'
import Store from '../store/about'

export default class About extends Component {
	render() {
		const { photo, name, email, blog } = Store.state

		this.el.clasList.add('about')
		this.el.innerHTML = /*html*/ `
			<h1>Todo List</h1>
			<div style="background-image: url(${photo})" class="photo"></div>
			<p class="name">${name}</p>
			<p>
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a>
			</p>
			<p><a href="${blog}" target="_blank">Blog</a></p>
		`
	}
}
