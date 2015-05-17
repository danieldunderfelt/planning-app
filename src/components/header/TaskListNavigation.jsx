import React from 'react'
import app from 'ampersand-app'

import NavItem from './NavItem.jsx!'

const NAVITEMS = [
	{ viewKey: "now", label: "Now" },
	{ viewKey: "longterm", label: "Long term" },
	{ viewKey: "habits", label: "Habits" }
]

class TaskListNavigation extends React.Component {

	constructor() {
		super()

		this.state = {
			active: app.taskListState.get('currentList')
		}

		app.taskListState.on('change:currentList', this.setActive.bind(this))
	}

	setActive() {
		this.setState({
			active: app.taskListState.get('currentList')
		})
	}

	render() {
		return <nav>
			<ul>
				{NAVITEMS.map((el, i) => {
					return <NavItem key={i} viewKey={el.viewKey} active={ this.state.active === el.viewKey ? true : false }>{el.label}</NavItem>
				})}
			</ul>
		</nav>
	}
}

export default TaskListNavigation