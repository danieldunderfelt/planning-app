import React from 'react'
import TaskActions from '../../actions/TaskActions'
import rbs from 'react-bootstrap'
import classnames from 'classnames'
import mui from 'mui'

let {
	RadioButtonGroup,
	RadioButton,
	TextField
} = mui

let {Grid, Row, Col} = rbs

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
		TaskActions.createTask(this.state)
		this.resetForm()
	}

	updateValue(e) {
		this.setState({
			title: this.refs.taskTitle.getValue(),
			description: this.refs.taskDescription.getValue(),
			taskType: this.refs.taskType.getSelectedValue()
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
					<div className="form-input">
						<TextField
							{... standardProps}
							value={this.state.title}
							floatingLabelText="What is your quest?"
							ref="taskTitle" />
					</div>
					<div className="form-input">
						<TextField
							{... standardProps}
							value={this.state.description}
							floatingLabelText="Brief description"
							ref="taskDescription"
							multiLine={true} />
					</div>
				</section>
				<Row>
					<RadioButtonGroup
						{... standardProps}
						ref="taskType"
						name="taskType"
						defaultSelected={this.state.taskType}>
							<Col xs={6}>
								<RadioButton value="task" label="Task" />
							</Col>
							<Col xs={6}>
								<RadioButton value="goal" label="Goal" />
							</Col>
					</RadioButtonGroup>
				</Row>
			</form>
		)
	}
}

export default TaskForm