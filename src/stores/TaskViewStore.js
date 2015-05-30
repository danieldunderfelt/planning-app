import Alt from '../app/Alt'
import TaskViewActions from '../actions/TaskViewActions'

class TaskViewStore {

	constructor() {
		this.view = 'now'

		this.bindListeners({
			handleViewChange: TaskViewActions.SET_VIEW
		})
	}

	handleViewChange(view) {
		this.view = view
	}
}

export default Alt.createStore(TaskViewStore, 'taskViewStore', true)