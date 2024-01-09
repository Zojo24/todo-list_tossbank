import { Component } from '../core/zojo'
import Store from '../store/about'

export default class About extends Component {
	async render() {
		this.el.classList.add('about-container', 'about')
		this.el.innerHTML = /*html*/ `
		<div class="about-wrapper">
			<img class="skeleton" src="/public/about.png" alt="toss bank" />
			<p class="intro skeleton"></p>
			<div class="developer skeleton"></div>
		`
		const { intro, name, email, blog } = Store.state

		this.el.classList.add('about-container', 'about')
		this.el.innerHTML = /*html*/ `
			<div class="about-wrapper">
				<img src="/public/about.png" alt="toss bank" />
				<p class="intro">${intro}</p>
				<div class="developer">
					<span class="developer_intro">개발자</span>
					<img class="profile" src="/public/profile.jpg" alt="profile picture" />
					<p class="name">${name}</p>
					<p>
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a>
					</p>
					<p><a href="${blog}" target="_blank">Blog</a></p>
				</div>
			</div>
		`
	}
}
