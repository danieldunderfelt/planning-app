import React from 'react'
import TaskActions from '../../actions/TaskActions'
import Input from 'react-bootstrap/lib/Input'
import classnames from 'classnames'

let resetState = {
	title: "",
	description: "",
}

class TaskForm extends React.Component {

	constructor() {
		super()
		this.state = resetState
	}

	handleSubmit(e) {
		e.preventDefault()
		TaskActions.createTask({
			title: this.state.title,
			description: this.state.description,
		})

		this.resetForm()
	}

	updateValue(e) {
		this.setState({
			title: this.refs.taskTitle.getValue(),
			description: this.refs.taskDescription.getValue(),
		})
	}

	resetForm() {
		this.setState(resetState)
	}

	render() {
		let standardProps = {
			onChange: this.updateValue.bind(this)
		}

		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<Input
					{... standardProps}
					type="text"
					value={this.state.title}
					placeholder="Your task title"
					label="What is your quest?"
					ref="taskTitle" />
				<Input
					{... standardProps}
					type="textarea"
					label="Task description"
					placeholder="Enter a description"
					ref="taskDescription"
					value={this.state.description} />
			</form>
		)
	}
}

export default TaskForm