import { Component } from '../core/zojo'
import todoStore, { readTodo, deleteAllTodo, reorderTodo } from '../store/todos'
import TodoItem from './TodoItem'

const SECOND_TO_MS = 100

export default class TodoList extends Component {
	constructor() {
		super()
		readTodo()
		todoStore.subscribe('todoItems', () => this.render())
	}
	render() {
		this.el.classList.add('todo-list')
		this.el.innerHTML = /*html*/ `
			<div class="filter">
				<button type="button" class="show-all">전체보기</button>
				<button type="button" class="active">진행중</button>
				<button type="button" class="completed">완료</button>
				<button type="button" class="delete-all">완료 삭제</button>
			</div>
			<div class="todo-item sortable"></div>
    `
		const todoListEl = this.el.querySelector('.todo-item')
		todoListEl.append(
			...todoStore.state.todoItems.map(
				todoItem => new TodoItem({ todoItem }).el
			)
		)

		// 전체보기 & 진행중 & 완료 항목 분류 //
		const allButton = this.el.querySelector('.show-all')
		allButton.addEventListener('click', () => {
			const taskActive = this.el.querySelectorAll('.task-active')
			taskActive.forEach(i => {
				const itemDisplay = i.closest('.task')
				itemDisplay.style.display = 'block'
			})
		})

		const activeButton = this.el.querySelector('.active')
		activeButton.addEventListener('click', () => {
			const taskActive = this.el.querySelectorAll('.task-active')
			taskActive.forEach(i => {
				const itemDisplay = i.closest('.task')
				itemDisplay.style.display = 'block'
			})
			taskActive.forEach(i => {
				const itemDisplay = i.closest('.task')
				if (!i.selected) {
					itemDisplay.style.display = 'none'
				}
			})
		})
		const completedButton = this.el.querySelector('.completed')
		completedButton.addEventListener('click', () => {
			const taskCompleted = this.el.querySelectorAll('.task-completed')
			const taskActive = this.el.querySelectorAll('.task-active')
			taskActive.forEach(i => {
				const itemDisplay = i.closest('.task')
				itemDisplay.style.display = 'block'
			})
			taskCompleted.forEach(i => {
				const itemDisplay = i.closest('.task')
				if (!i.selected) {
					itemDisplay.style.display = 'none'
				}
			})
		})

		// 완료항목 일괄 삭제하기//
		const deleteAllButton = this.el.querySelector('.delete-all')
		deleteAllButton.addEventListener('click', () => {
			const todoId = todoStore.state.todoItems
				.filter(status => status.done)
				.map(todoId => todoId.id)
			deleteAllTodo(todoId)
		})

		// 항목 순서 바꾸기//
		$(function () {
			$('.sortable').sortable()
			$('.sortable').disableSelection()
		})
		todoListEl.addEventListener('mouseup', () => {
			setTimeout(() => {
				const arr = []
				const todoIds = this.el.querySelectorAll('.todo-id')
				todoIds.forEach(todoId => arr.push(todoId.value))
				reorderTodo(arr)
			}, SECOND_TO_MS)
		})
	}
}
