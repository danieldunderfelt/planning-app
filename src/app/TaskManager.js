class TaskManager {

	createTask(data) {
		return {
			title: data.title,
			description: data.description
		}
	}
}

export default new TaskManager()