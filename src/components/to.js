import { Component } from '../core/zojo'
import { readTodo, createTodo, deleteTodo, updateTodo } from '../store/todos'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
	}
	//todoList//
	async render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /*html*/ `
				<h1>Todo List</h1>
				<div class="wrapper__top">
					<ul class="list-header">
						<li class="list-header__item">
							<span>작업 내용</span>
						</li>
						<li class="list-header__item">
							<span>마감일</span>
						</li>
						<li> </li>
					</ul>

					<ul class="list-input">
						<li class="list-input__item">
							<input class="task-input" placeholder="작업 내용을 작성해주세요."/>
						</li>
						<li class="list-input__item">
							<input class="date-input" type="date">
						</li>
						<li class="list-input__item">
							<button class="add">
								<span class="material-symbols-outlined">add</span>
							</button>
						</li>
					</ul>
				</div>
				`

		readTodo()
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				return response.json()
			})
			.then(data => this.getTodoList(data))
			.catch(error => console.error('Fetch Error:', error))
	}

	getTodoList(data) {
		// 항목 완료 & 미완료 분류 //
		const active = data.filter(status => status.done === 'true')
		const completed = data.filter(status => status.done === 'false')

		for (let i = 0; i < data.length; i++) {
			this.el.innerHTML += /*html*/ `
				<div class="wrapper__bottom">
					<ul class="response">
						<li class="response__item"> <input class="checkbox" type="checkbox"/></li>
						<li class="response__item" style="display:none;">
							<span>${data[i].id}</span>
						</li>
						<li class="response__item">
							<input value= ${data[i].title.split('##')[0]} />
						</li>
						<li class="response__item">
							<input type="date" value=${data[i].title.split('##')[1]} />
						</li>
						<li class="response__item">
							<select class="status-input">
								<option class="active" value="true">진행중</option>
								<option class="completed" value="false">완료</option>
							</select>
						</li>
						<li class="response__item">
							<button type= "submit" class="edit" onclick='selectedItem()'>
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
		}
		// 항목 추가하기//
		const taskInput = this.el.querySelector('.task-input')
		const dateInput = this.el.querySelector('.date-input')

		const addButton = this.el.querySelector('.add')
		addButton.addEventListener('click', () => createTodo(taskInput, dateInput))

		// //항목 수정하기//
		const statusInput = this.el.querySelectorAll('.status-input')
		console.log(statusInput)
		let j = 0
		statusInput.forEach(statusInput => {
			if (statusInput.item(0).value == data[j++].done) {
				statusInput.item(0).selected = 'selected'
			} else {
				statusInput.item(1).selected = 'selected'
			}
		})
		j = null

		const editButtons = this.el.querySelectorAll('.edit')
		editButtons.forEach(editButton => {
			editButton.addEventListener('click', () => {
				console.log('save')
				const todoId = editButton.parentNode.parentNode.children
					.item(1)
					.children.item(0).innerHTML
				console.log(todoId)
				const task = editButton.parentNode.parentNode.children
					.item(2)
					.children.item(0).value
				console.log(task)
				const date = editButton.parentNode.parentNode.children
					.item(3)
					.children.item(0).value
				console.log(date)
				const select = editButton.parentNode.parentNode.children
					.item(4)
					.children.item(0).value
				console.log(select)
				updateTodo(todoId, task, date, select)
			})
		})

		document.getElementsByClassName('.list-input__item').onsubmit =
			function () {
				const textInput = this.el.getElementsByClassName('task-input').value

				const regex = /^[A-Za-z0-9 ]+$/

				if (!regex.test(textInput)) {
					alert('띄어쓰기를 포함한 문자와 숫자만 입력하세요!')
					return false
				}
				alert('성공적으로 제출되었습니다!')
				return true
			}

		//항목 삭제하기//
		const deleteButtons = this.el.querySelectorAll('.delete')
		deleteButtons.forEach(deleteButton => {
			const todoId = deleteButton.parentNode.parentNode.children
				.item(1)
				.children.item(0).innerHTML
			deleteButton.addEventListener('click', () => deleteTodo(todoId))
		})
		// const statusSelect = document.getElementById('statusSelect')
	}
}
