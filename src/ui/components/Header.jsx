import React from 'react'
import TaskViewNav from './nav/TaskViewNav.jsx!'

class Header extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <header>
			<TaskViewNav />
		</header>
	}
}

export default Header