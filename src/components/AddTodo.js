import { Component } from '../core/zojo'
import todoStore, { createTodo } from '../store/todos'

export default class AddTodo extends Component {
	render() {
		this.el.classList.add('add-todo')
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

        <ul class="new-input">
          <li class="new-input__item">
            <input class="task-input" placeholder="작업 내용을 작성해주세요."/>
          </li>
          <li class="new-input__item">
            <input class="date-input" type="date">
          </li>
          <li class="new-input__item">
            <button class="add">
              <span class="material-symbols-outlined">add</span>
            </button>
          </li>
        </ul>
      </div>
      `

		const addButton = this.el.querySelector('.add')

		addButton.addEventListener('click', () => {
			const taskInput = this.el.querySelector('.task-input').value
			const dateInput = this.el.querySelector('.date-input').value
			const title = taskInput + '##' + dateInput
			createTodo(title)
		})
	}
}
