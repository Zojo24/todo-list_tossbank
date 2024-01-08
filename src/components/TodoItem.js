import { Component } from '../core/zojo'
import todoStore, { deleteTodo, updateTodo } from '../store/todos'

export default class TodoItem extends Component {
	constructor(props) {
		super({ props, tagName: 'div' })
	}

	render() {
		const { todoItem } = this.props
		console.log(typeof todoItem.title.split('##')[0])
		this.el.classList.add('task')
		this.el.innerHTML = /*html*/ `
      <ul class="edit-task">
        <li class="edit-task__item" style="display:none;">
          <input class="todo-id" value =${todoItem.id} />
        </li>
        <li class="edit-task__item">
          <input class="task-input" value="${todoItem.title.split('##')[0]}" />
        </li>
        <li class="edit-task__item">
          <input class="date-input" type="date" value=${
						todoItem.title.split('##')[1]
					} />
        </li>
        <li class="edit-task__item">
          <select class="status-input">
            <option class="task-active" value="true" selected>진행중</option>
            <option class="task-completed" value="false" >완료</option>
          </select>
        </li>
        <li class="edit-task__item">
          <button type= "submit" class="edit">
          <span class="material-symbols-outlined">edit_note</span>
          </button>
        </li>
        <li class="edit-task__item">
          <button class="delete">
            <span class="material-symbols-outlined">remove</span>
          </button>
        </li>
      </ul>
  `
		//삭제하기//
		const deleteButton = this.el.querySelector('.delete')
		const id = this.el.querySelector('.todo-id').value
		deleteButton.addEventListener('click', () => deleteTodo(id))

		//항목 수정하기//
		const editButton = this.el.querySelector('.edit')
		editButton.addEventListener('click', () => {
			const id = this.el.querySelector('.todo-id').value
			const taskInput = this.el.querySelector('.task-input').value
			const dateInput = this.el.querySelector('.date-input').value
			const done = this.el.querySelector('.status-input').value
			const title = taskInput + '##' + dateInput
			updateTodo(id, title, done)
		})

		const statusInput = this.el.querySelector('.status-input')
		if (todoItem.done) {
			statusInput.item(1).selected = 'selected'
		} else {
			statusInput.item(0).selected = 'selected'
		}
		// const statusInput = this.el.querySelector('.status-input')
		// if (statusInput.item(1).value === todoItem.done) {
		// 	statusInput.item(0).selected = 'selected'
		// } else {
		// 	statusInput.item(1).selected = 'selected'
		// }
	}
}
