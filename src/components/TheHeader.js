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
		this.el.innerHTML = /*html*/ `
      <a href="#" class="logo"><span>toss bank</span>
      <nav>
        <ul>
          ${this.state.menus
						.map(menu => {
							return /*html*/ `
            <li>
              <a href="${menu.href}">
                ${menu.name}
              </a>
            </li>
            `
						})
						.join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <!-- <img src= "/public/Toss_Symbol_Primary.png" alt="user"> -->
      </a>
    `
	}
}
