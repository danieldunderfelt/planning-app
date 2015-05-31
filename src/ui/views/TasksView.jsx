import React from 'react'
import Router from 'react-router'
import AltContainer from '../utils/AltContainer'
import TaskStore from '../../stores/TaskStore'

import TaskList from '../components/TaskList.jsx!'
import Header from '../components/Header.jsx!'

class TaskView extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <section className="task-view">
			<Header/>
			<AltContainer store={TaskStore}>
				<TaskList/>
			</AltContainer>
		</section>
	}
}

export default TaskView