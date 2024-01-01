import { Component } from '../core/zojo'
import CRUD from '/api/todoAPI'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.crud = new CRUD()
	}
	//API POST//
	async createTodo(taskInput, dateInput, managerInput) {
		const parameter = taskInput.value + '##' + dateInput.value

		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify({
					title: parameter,
					order: ''
				})
			}
		)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				return response.json()
			})
			.then(() => {
				window.location.reload()
			})
			.catch(error => console.error('Fetch Error:', error))
	}

	//API DELETE//
	async deleteTodo(todoId) {
		console.log(todoId)
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/' +
				todoId,
			{
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				return response.json()
			})
			.then(() => {
				window.location.reload()
			})
			.catch(error => console.error('Fetch Error:', error))
	}

	//GET//
	readTodo() {
		const res = fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
			{
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
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
		console.log(data)
		for (let i = 0; i < data.length; i++) {
			this.el.innerHTML += /*html*/ `
				<div class="wrapper__bottom">
					<ul class="response">
						<li class="response__item"> <input type="checkbox"/></li>
						<li class="response__item" style="display:none;">
							<span>${data[i].id}</span>
						</li>
						<li class="response__item">
							<span>${data[i].title.split('##')[0]}</span>
						</li>
						<li class="response__item">
							<span>${data[i].title.split('##')[1]}</span>
						</li>
						<li class="response__item">
						<select class="status-input">
							<option class="pending" value="pending">대기중</option>
							<option class="ongoing"value="ongoing">진행중</option>
							<option class="completed"value="completed">완료</option>
						</select>
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

		const taskInput = this.el.querySelector('.task-input')
		const dateInput = this.el.querySelector('.date-input')

		const addButton = this.el.querySelector('.add')
		addButton.addEventListener('click', () =>
			this.createTodo(taskInput, dateInput)
		)

		const inputEl = this.el.querySelector('input')
		inputEl.addEventListener('input', () => {
			// store.state.todoText = inputEl.value
		})

		const deleteButtons = this.el.querySelectorAll('.delete')
		deleteButtons.forEach(deleteButton => {
			const todoId = deleteButton.parentNode.parentNode.children
				.item(1)
				.children.item(0).innerHTML
			deleteButton.addEventListener('click', () => this.deleteTodo(todoId))
		})
		const statusSelect = document.getElementById('statusSelect')
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

		this.readTodo()
	}
}
