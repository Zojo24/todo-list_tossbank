import { Component } from '../core/zojo'
import CRUD from '/api/todoAPI'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.crud = new CRUD()
	}
	//API POST//
	async createTodo(taskInput, dateInput) {
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
		const json = await res.json()
		console.log(json)

		return json
	}

	//GET//
	async readTodo() {
		console.log('readTodo')
		const res = await fetch(
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
			.then(data => console.log(data))
			.catch(error => console.error('Fetch Error:', error))
	}

	//API DELETE//
	async deleteTodo(todoId) {
		const res = await fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId',
			{
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				}
			}
		)
		const json = await res.json()
		console.log(json)

		return json
	}
	//todoItem//
	async render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /*html*/ `
		  <h1>Todo List</h1>
			<div class="list-container">
				<ul class="list-header">
					<li class="list-header__item">
						<span>작업 내용</span>
					</li>
					<li class="list-header__item">
						<span>마감일</span>
					</li>
					<li class="list-header__item">
						<span>결재자</span>
					</li>
					<li> </li>
				</ul>	
				<ul class="list-input">
					<li class="list-input__item">
						<input class="task-input" placeholder="해야하는 작업을 작성해주세요."/>
					</li>
					<li class="list-input__item">
						<input class="date-input" type="date">
					</li>
					<li class="list-input__item">
						<input/>
					</li>
					<li>
						<button class="add">
							<span class="material-symbols-outlined">add</span>
						</button>
					</li>
				</ul>
			</div>

				
		<!-- <button class="delete">
						<span class="material-symbols-outlined">remove</span>
					</button>
				</div> -->
        `

		window.addEventListener('load', () => this.readTodo())

		const taskInput = this.el.querySelector('.task-input')
		const dateInput = this.el.querySelector('.date-input')

		const addButton = this.el.querySelector('.add')
		addButton.addEventListener('click', () =>
			this.createTodo(taskInput, dateInput)
		)

		const inputEl = this.el.querySelector('input')
		inputEl.addEventListener('input', () => {
			store.state.todoText = inputEl.value
		})

		const deleteButton = this.el.querySelector('.delete')
		deleteButton.addEventListener('click', () => this.deleteTodo())
	}
}
