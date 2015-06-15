export let __hotReload = true

class TaskManager {

	createTask(data) {
		return {
			title: data.title,
			description: data.description,
			type: data.taskType
		}
	}
}

export default new TaskManager()