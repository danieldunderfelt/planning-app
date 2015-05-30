import React from 'react'
import Router from 'react-router'

import TaskList from '../components/TaskList.jsx!'
import Header from '../components/Header.jsx!'

class TaskView extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <section className="task-view">
			<Header/>
			<TaskList/>
		</section>
	}
}

export default TaskView