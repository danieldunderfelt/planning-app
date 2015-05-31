import Alt from '../app/Alt'
import TaskViewActions from '../actions/TaskViewActions'
import Immutable from 'immutable'
import ImmutableUtil from 'alt/utils/ImmutableUtil'

class TaskViewStore {

	constructor() {
		this.state = Immutable.Map({
			view: "now",
			tasksInView: []
		})

		this.bindListeners({
			handleViewChange: TaskViewActions.SET_VIEW
		})
	}

	handleViewChange(view) {
		this.setState(this.state.set('view', view))
	}

	getRelevantTasks() {

	}
}

export default Alt.createStore(ImmutableUtil(TaskViewStore), 'taskViewStore', true)