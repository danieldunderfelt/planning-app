import React from 'react'
import Label from 'react-bootstrap/lib/Label'

class Task extends React.Component {

	render() {
		return (
			<article>
				<h3>{this.props.task.title}</h3>
				<p>{this.props.task.description}</p>
				<Label>{this.props.task.type}</Label>
			</article>
		)
	}
}

export default Task