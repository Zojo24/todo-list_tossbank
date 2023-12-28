import { Component } from '../core/zojo'
import CRUD from '/api/todoAPI'

export default class TodoItem extends Component {
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
		const json = await res.json()
		console.log(json)

		return json
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
		this.el.classList.add('todo-item')
		this.el.innerHTML = /*html*/ `
        <div class="items">
            <div class="task">
                <span>작업 내용</span>
                <input class="task-input" placeholder="해야하는 작업을 작성해주세요."/>
            </div>
      
            <div class="due-date">
                <span>마감일</span>
                <input class="date-input" type="date">
            </div>
      
            <div class="status">
                <span>진행 상황</span>
                <select>
                    <option value="todo">진행 전</option>
                    <option value="in-progress">진행 중</option>
                    <option value="completed">진행 완료</option>
                </select>
            </div>
      
            <div class="manager">
                <span>결재자</span>
                <input/>
            </div>
            <button class="add">+</button>
            <button class="delete">-</button>
        </div>
        `

		const taskInput = this.el.querySelector('.task-input')
		const dateInput = this.el.querySelector('.date-input')

		const addButton = this.el.querySelector('.add')
		addButton.addEventListener('click', () =>
			this.createTodo(taskInput, dateInput)
		)

		const deleteButton = this.el.querySelector('.delete')
		deleteButton.addEventListener('click', () => this.deleteTodo())
	}
}
