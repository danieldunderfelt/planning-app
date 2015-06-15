import React from 'react'
import Router from 'react-router'
import AltContainer from 'alt/AltContainer'
import TaskStore from '../../stores/TaskStore'
import rbs from 'react-bootstrap'

let {Grid, Row, Col} = rbs

import TaskList from '../components/TaskList.jsx!'
import TaskForm from '../components/TaskForm.jsx!'

class TaskView extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<Row>
				<Col xs={12} md={6}>
					<TaskForm />
				</Col>
				<Col xs={12} md={6}>
					<AltContainer store={TaskStore}>
						<TaskList />
					</AltContainer>
				</Col>
			</Row>
		)
	}
}

export default TaskView