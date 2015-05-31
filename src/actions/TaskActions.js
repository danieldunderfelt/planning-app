import Alt from '../app/Alt'

class TaskActions {

	static displayName = 'TaskActions'

	constructor() {
		this.generateActions(
			'populateTasks',
			'loadFailed'
		)
	}
}

export default Alt.createActions(TaskActions)