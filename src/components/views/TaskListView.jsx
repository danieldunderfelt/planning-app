import React from 'react'
import app from 'ampersand-app'
import Header from '../../header/Header.jsx!'

class TaskListView extends React.Component {

	render() {
		return <section className="task-view">
			<Header nav="taskListNav" />
		</section>
	}
}

export default TaskListView