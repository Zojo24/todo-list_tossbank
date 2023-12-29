import { Component } from '../core/zojo'

export default class TheHeader extends Component {
	constructor() {
		super({
			tagName: 'header',
			state: {
				menus: [
					{
						name: 'Home',
						href: '#/'
					},
					{
						name: 'About',
						href: '#/about'
					}
				]
			}
		})
	}
	render() {
		this.el.classList.add('header')
		this.el.innerHTML = /*html*/ `
		<div class="header">
			<a href="#/">
				<img class=bank-logo src="/public/TossBank_Logo_Primary_Reverse.png" alt="Toss Bank logo"/>
			</a>
			<div class="menu">			
				<a href="#/">Todo List</a>
				<a href="#/about">About</a>
			</div>
		</div>
    `
	}
}
