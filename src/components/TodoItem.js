import { Component } from '../core/zojo'
import todoStore, { deleteTodo, updateTodo } from '../store/todos'

export default class TodoItem extends Component {
	constructor(props) {
		super({ props, tagName: 'div' })
	}

	render() {
		const { todoItem } = this.props

		this.el.classList.add('todo-item')
		this.el.innerHTML = /*html*/ `
    <div class="wrapper__bottom">
      <ul class="response">
        <li class="response__item"> <input class="checkbox" type="checkbox"/></li>
        <li class="response__item" style="display:none;">
          <input class="todo-id" value = ${todoItem.id} />
        </li>
        <li class="response__item">
          <input class="task-input" value= ${todoItem.title.split('##')[0]} />
        </li>
        <li class="response__item">
          <input class="date-input" type="date" value=${
						todoItem.title.split('##')[1]
					} />
        </li>
        <li class="response__item">
          <select class="status-input">
            <option class="active" value="true">진행중</option>
            <option class="completed" value="false">완료</option>
          </select>
        </li>
        <li class="response__item">
          <button type= "submit" class="edit">
          <span class="material-symbols-outlined">edit_note</span>
          </button>
        </li>
        <li class="response__item">
          <button class="delete">
            <span class="material-symbols-outlined">remove</span>
          </button>
        </li>
      </ul>
    </div>
  `
		const deleteButton = this.el.querySelector('.delete')
		const id = this.el.querySelector('.todo-id').value
		deleteButton.addEventListener('click', () => deleteTodo(id))

		const editButton = this.el.querySelector('.edit')
		editButton.addEventListener('click', () => {
			const statusInput = this.el.querySelector('.status-input').value
			const taskInput = this.el.querySelector('.task-input').value
			const dateInput = this.el.querySelector('.date-input').value
			const update = statusInput + taskInput + dateInput
			updateTodo(update)
		})
	}
}
