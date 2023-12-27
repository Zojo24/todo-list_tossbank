import { Component } from '../core/zojo'
import aboutStore from '../store/about'

export default class About extends Component {
	render() {
		this.el.innerHTML = '<h1>About</h1>'
		const { photo, name, email, blog } = aboutStore.state

		this.el.clasList.add('about')
		this.el.innerHTML = /*html*/ `
		<div style="background-image: url(${photo})" class="photo"></div>
		<p class="name">${name}</p>
		<p>
			<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a>
		</p>
		<p><a href="${blog}" target="_blank">Blog</a></p>
		`
	}
}
