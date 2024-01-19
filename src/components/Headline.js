import { Component } from '../core/zojo'

export default class Headline extends Component {
	render() {
		this.el.classList.add('headline')
		this.el.innerHTML = /*html*/ `
			<h1 class="title">Todo List</h1>
      <div class="new-task">
        <ul class="description">
          <li class="description__item">
            <span>작업 내용</span>
          </li>
          <li class="description__item">
            <span>마감일</span>
          </li>
          <li> </li>
        </ul>	
        `
	}
}
