import React from 'react'
import TaskActions from '../../actions/TaskActions'
import Input from 'react-bootstrap/lib/Input'
import RadioGroup from './inputs/RadioGroup.jsx!'
import classnames from 'classnames'

let resetState = {
	title: "",
	description: "",
	taskType: "task"
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
			type: this.state.taskType
		})

		this.resetForm()
	}

	updateValue(e) {
		this.setState({
			title: this.refs.taskTitle.getValue(),
			description: this.refs.taskDescription.getValue()
		})
	}

	updateTaskType(value) {
		this.setState({
			taskType: value
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
				<section className="task-content">
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
				</section>
				<RadioGroup
					ref="taskType"
					name="taskType"
					selectedValue={this.state.taskType}
					onChange={this.updateTaskType.bind(this)}>
					{Radio => (
						<section className="type-select">
							<Radio value="task" label="Task" />
							<Radio value="goal" label="Goal" />
						</section>
					)}
				</RadioGroup>
			</form>
		)
	}
}

export default TaskForm