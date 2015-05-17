import State from 'ampersand-state'

var TaskListState = State.extend({
	typeAttribute: 'tasklist',
	props: {
		currentList: 'string'
	}
})

export default TaskListState