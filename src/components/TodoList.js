import { Component } from '../core/zojo'
import { readTodo } from '../store/todos'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
	}

	//API PUT//
	updateTodo(todoId, task, date, select) {
		const parameter = task + '##' + date
		console.log(parameter)
		const res = fetch(
			'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/' +
				todoId,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
					apikey: 'KDT7_GrZ1eYBo',
					username: 'KDT7_ChoiHongJoo'
				},
				body: JSON.stringify({
					title: parameter,
					done: select
				})
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

		//진행 상황 수정하기//
		const statusInput = this.el.querySelectorAll('.status-input')
		statusInput.forEach(statusInput => {
			statusInput.addEventListener('change', () => {
				const todoId = statusInput.parentNode.parentNode.children
					.item(1)
					.children.item(0).innerHTML
				const task = statusInput.parentNode.parentNode.children
					.item(2)
					.children.item(0).value
				const date = statusInput.parentNode.parentNode.children
					.item(3)
					.children.item(0).value
				const select = statusInput.value
				this.updateTodo(todoId, task, date, select)
			})
		})

		'click',
			() => this.updateTodo(taskInput, dateInput, statusInput),
			console.log('hi')

		const inputEl = this.el.querySelector('input')
		inputEl.addEventListener('input', () => {
			// store.state.todoText = inputEl.value
		})
		//항복 완료/미완료 분류//
		// const taskStatus = this.el.querySelector('.status-input')
		// taskStatus.sort((a, b) => {
		// 	const arr = ['pending', 'completed']
		// 	return arr.includes(a.status) || arr.includes(b.status) ? 1 : -1
		// })
		// console.log(taskStatus)

		//input 수정하기//
		const updateInput = (e, todoId) => {
			console.log(hi)
			const todolem = e.target
			const inputText = e.target.innerText
			const todoItemElem = todoElem.parentNode
			const inputElem = document.createElement('input')
			inputElem.value = inputText
			inputElem.classList.add('edit-input')

			inputElem.addEventListener('keypress', e => {
				if (e.key === 'Enter') {
					updateTodo(e.target.value, todoId) // todo 수정
					document.body.removeEventListener('click', onClickBody) // 이벤트리스너 제거
				}
			})

			todoItemElem.appendChild(inputElem) // todoItemElem 요소에 자식 요소로 inputElem 요소 추가

			// body에 클릭에 대한 이벤트 리스너 등록
			document.body.addEventListener('click', onClickBody)

			// todoItemElem 요소를 제외한 영역을 클릭 시, 수정모드 종료
			const onClickBody = e => {
				if (e.target !== inputElem) {
					todoItemElem.removeChild(inputElem)
					document.body.removeEventListener('click', onClickBody)
				}
			}
		}

		//항목 삭제하기//
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
}
