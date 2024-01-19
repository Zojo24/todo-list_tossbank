import { Component } from '../core/zojo'
import todoStore, { createTodo } from '../store/todos'

export default class AddTodo extends Component {
	constructor() {
		super()
		todoStore.subscribe('loading', () => {
			const loaderEl = this.el.querySelector('.loader')
			const addButton = this.el.querySelector('.addButton')
			if (todoStore.state.loading) {
				addButton.classList.add('hide'), loaderEl.classList.remove('hide')
			} else {
				addButton.classList.remove('hide'), loaderEl.classList.add('hide')
			}
		})
	}
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
            <div class="loader hide"></div>
            <div>
              <button type="button" class="add addButton">
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      `

		const MAX_INPUT_LENGTH = 13

		const validateInput = this.el.querySelector('.task-input')
		validateInput.addEventListener('keyup', () => {
			if (validateInput.value.length > MAX_INPUT_LENGTH) {
				console.log(validateInput.value)
				validateInput.value = validateInput.value.slice(0, MAX_INPUT_LENGTH)
			}
		})
		const addButton = this.el.querySelector('.add')
		const titleSpliter = '##'

		addButton.addEventListener('click', () => {
			const taskInput = this.el.querySelector('.task-input').value
			const dateInput = this.el.querySelector('.date-input').value
			const title = taskInput + titleSpliter + dateInput
			createTodo(title)
		})
	}
}
