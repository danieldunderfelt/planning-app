import Alt from '../app/Alt'
import { datasource } from 'alt/utils/decorators'
import TaskActions from '../actions/TaskActions'
import TaskSource from '../sources/TaskSource'

@datasource(TaskSource)
class TaskStore {

	constructor() {
		this.tasks = []
		this.loadError = false

		this.bindListeners({
			receivePayload: TaskActions.POPULATE_TASKS,
			handleError: TaskActions.LOAD_FAILED
		})
	}

	receivePayload(data) {
		this.loadError = false
		this.addTasks(data)
	}

	handleError(err) {
		this.loadError = true
	}

	addTasks(tasks) {
		this.setState({
			tasks: tasks.data
		})
	}
}

export default Alt.createStore(TaskStore, 'taskStore', true)