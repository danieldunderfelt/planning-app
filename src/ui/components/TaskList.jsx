import React from 'react'
import classNames from 'classnames'
import Task from './Task.jsx!'

import taskListStyles from '../../css/taskList.css!'

class TaskList extends React.Component {

	constructor() {
		super()
	}

	render() {
		let classes = classNames({
			'task-list__container': true,
			'--error': this.props.loadError !== false,
			'--loading': this.props.loading === true
		})

		return (
			<div className={classes}>
				{this.props.tasks.map(task => {
					return (
						<div key={task.id}>
							<Task task={task} />
						</div>
					)
				})}
			</div>
		)
	}
}

export default TaskList