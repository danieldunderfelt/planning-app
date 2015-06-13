import React from 'react'

class Task extends React.Component {

	render() {
		return (
			<article>
				<h3>{this.props.task.title}</h3>
				<p>{this.props.task.description}</p>
			</article>
		)
	}
}

export default Task