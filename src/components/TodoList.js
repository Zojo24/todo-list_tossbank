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
		console.log(data)
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
								<option class="ongoing" value="true" >진행중</option>
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
		}
		// 항목 추가하기//
		const taskInput = this.el.querySelector('.task-input')
		const dateInput = this.el.querySelector('.date-input')

		const addButton = this.el.querySelector('.add')
		addButton.addEventListener('click', () => createTodo(taskInput, dateInput))

		//항목 수정하기//
		const statusInput = this.el.querySelector('.status-input')

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
					.children.item(0)
					.children.item(0).value
				console.log(select)
				updateTodo(todoId, task, date, select)
			})
		})

		//항목 삭제하기//
		const deleteButtons = this.el.querySelectorAll('.delete')
		deleteButtons.forEach(deleteButton => {
			const todoId = deleteButton.parentNode.parentNode.children
				.item(1)
				.children.item(0).innerHTML
			deleteButton.addEventListener('click', () => deleteTodo(todoId))
		})
		const statusSelect = document.getElementById('statusSelect')
	}
}

//항복 완료/미완료 분류//
// const taskStatus = this.el.querySelector('.status-input')
// taskStatus.sort((a, b) => {
// 	const arr = ['pending', 'completed']
// 	return arr.includes(a.status) || arr.includes(b.status) ? 1 : -1
// })
// console.log(taskStatus)
