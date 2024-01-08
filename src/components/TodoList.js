import { Component } from '../core/zojo'
import todoStore, { readTodo, deleteAllTodo, reorderTodo } from '../store/todos'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor() {
		super()
		todoStore.subscribe('task', () => this.render())
		todoStore.subscribe('date', () => this.render())
		todoStore.subscribe('status', () => this.render())
	}
	async render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /*html*/ `
			<div class="filter">
				<button class="active">진행중 목록</button>
				<button class="completed">완료 목록</button>
				<button class="delete-all">완료 삭제</button>
			</div>
			<div class="todo-item sortable"></div>
    `
		await readTodo()
		const todoListEl = this.el.querySelector('.todo-item')
		todoListEl.append(
			...todoStore.state.todoItems.map(
				todoItem => new TodoItem({ todoItem }).el
			)
		)

		// 항목 완료 & 미완료 분류 //
		const activeButton = this.el.querySelector('.active')
		activeButton.addEventListener('click', () => {
			const taskActive = this.el.querySelectorAll('.task-active')
			taskActive.forEach(i => {
				const itemDisplay = i.parentNode.parentNode.parentNode.parentNode
				if (!i.selected) {
					if (itemDisplay.style.display === 'none') {
						itemDisplay.style.display = 'block'
					} else {
						itemDisplay.style.display = 'none'
					}
				}
			})
		})
		const completedButton = this.el.querySelector('.completed')
		completedButton.addEventListener('click', () => {
			const taskCompleted = this.el.querySelectorAll('.task-completed')
			taskCompleted.forEach(i => {
				const itemDisplay = i.parentNode.parentNode.parentNode.parentNode
				if (!i.selected) {
					if (itemDisplay.style.display === 'none') {
						itemDisplay.style.display = 'block'
					} else {
						itemDisplay.style.display = 'none'
					}
				}
			})
		})

		// 완료항목 일괄 삭제하기//
		const deleteAllButton = this.el.querySelector('.delete-all')
		deleteAllButton.addEventListener('click', () => {
			let arr = []
			const todoId = todoStore.state.todoItems
				.filter(status => status.done === 'false')
				.map(todoId => arr.push(todoId.id))

			deleteAllTodo(arr)
		})

		// 항목 순서 바꾸기//
		$(function () {
			$('.sortable').sortable()
			$('.sortable').disableSelection()
		})
		todoListEl.addEventListener('mouseup', () => {
			const reorderTask = this.el.querySelector('.todo-item')
			console.log(reorderTask)
			let arr = []
			// if (todoListEl. )
			const reorderId = reorderTask.map(reorderId => arr.push(reorderId.id))
			console.log(reorderId.id)
			reorderTodo(arr)
		})
	}
}
