export let __hotReload = true
import Alt from '../app/Alt'
import TaskManager from '../app/Taskmanager'

class TaskActions {

	constructor() {

		this.generateActions(
			'markAsDone',
			'deleteTask'
		)
	}

	createTask(data) {
		let task = TaskManager.createTask(data)
		this.dispatch([task])
	}
}

export default Alt.createActions(TaskActions)