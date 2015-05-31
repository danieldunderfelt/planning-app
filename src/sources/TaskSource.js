import axios from 'axios'
import TaskActions from '../actions/TaskActions'

const TaskSource = {
	getTasks: {
		remote(state) {
			return axios.get('/testdata/tasks.json')
		},

		local(state) {
			return state.tasks.length > 0 ? state.tasks : null
		},

		success: TaskActions.populateTasks,
		error: TaskActions.loadFailed
	}
}

export default TaskSource