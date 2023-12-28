import { Component } from '../core/zojo'
import CRUD from '/api/todoAPI'

export default class TodoItem extends Component {
	constructor(props) {
		super(props)
	}
	async createTodo() {
		console.log('Creating Todo')
	}
	async render() {
		this.el.classList.add('todo-item')
		this.el.innerHTML = /*html*/ `
    <div class="items">
      <button class="add" onclick="createTodo()">+</button>
  
      <div class="task">
          <span>작업 내용</span>
          <input placeholder="해야하는 작업을 작성해주세요."/>
        </div>
  
        <div class="due-date">
          <span>마감일</span>
          <input type="date">
        </div>
  
        <div class="status">
          <span>진행 상황</span>
          <select>
            <option value="todo">진행 전</option>
            <option value="in-progress">진행 중</option>
            <option value="completed">진행 완료</option>
          </select>
        </div>
  
        <div class="manager">
          <span>결재자</span>
          <input/>
        </div>
    </div>
    `
		const addButton = this.el.querySelector('.add')
		addButton.addEventListener('click', () => this.createTodo())
	}
}
