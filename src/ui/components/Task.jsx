import React from 'react'

class Task extends React.Component {

	render() {
		return (
			<article>
				{this.props.task.title}
			</article>
		)
	}
}

export default Task