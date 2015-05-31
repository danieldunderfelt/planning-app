import Alt from '../app/Alt'

class TaskViewActions {

	static displayName = 'TaskViewActions'

	constructor() {
		this.generateActions(
			'setView',
			'setTasks'
		)
	}
}

export default Alt.createActions(TaskViewActions)