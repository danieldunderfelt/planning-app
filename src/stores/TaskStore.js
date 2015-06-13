import Alt from '../app/Alt'
import TaskActions from '../actions/TaskActions'

class TaskStore {

	constructor() {
		this.tasks = []
		this.bindActions(TaskActions)
	}

	createTask(task) {
		this.addTasks(task)
	}

	markAsDone(task) {
		// noop
	}

	deleteTask(task) {
		// noop
	}

	addTasks(tasks) {
		tasks.forEach(task => this.tasks.push(task))
	}
}

export default Alt.createStore(TaskStore, 'taskStore', true)