import Alt from '../app/Alt'

class TaskViewActions {

	setView(view) {
		this.dispatch(view)
	}
}

export default Alt.createActions(TaskViewActions)