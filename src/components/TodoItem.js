import { Component } from '../core/zojo'

export default class TodoItem extends Component {
	constructor(props) {
		super({
			props,
			tagName: 'li',
			className: 'todo-item'
		})
	}
	render() {
		this.el.classList.add('todo-item')
		this.el.innerHTML = /*html*/ `
      <div class="type">
        <span>작업 유형</span>
        <input/>
      </div>

      <div class="task">
        <span>작업 내용</span>
        <input placeholder="해야하는 작업을 작성해주세요."/>
      </div>

      <div class="start-date">
        <span>시작일</span>
        <input type="date">
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

      <div class="output">
      <span>결과물</span>
        <input placeholder="결과물에 대해 간략하게 작성해주세요."/>
      </div>

      <div class="follow-up">
      <span>후속 작업</span>
        <input placeholder="후속 작업을 작성해주세요."/>
      </div>

      <div class="manager">
      <span>결재자</span>
        <input/>
      </div>
    `
	}
}
