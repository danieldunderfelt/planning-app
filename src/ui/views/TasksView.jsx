import React from 'react'
import Router from 'react-router'
import AltContainer from 'alt/AltContainer'
import TaskStore from '../../stores/TaskStore'

import TaskList from '../components/TaskList.jsx!'
import TaskForm from '../components/TaskForm.jsx!'

import app from '../../css/app.css!'

class TaskView extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <section className="row">
			<div className="col-xs-6">
				<TaskForm />
			</div>
			<div className="col-xs-6">
				<AltContainer store={TaskStore}>
					<TaskList className="col-xs-6" />
				</AltContainer>
			</div>
		</section>
	}
}

export default TaskView