import React from 'react'
import app from 'ampersand-app'
import { APPNAME } from '../../data/constants'

import TaskListNavigation from './TaskListNavigation.jsx!'

const VIEWNAVS = {
	'taskListNav': TaskListNavigation
}

class Header extends React.Component {

	constructor() {
		super()
	}

	render() {
		var RenderNav = VIEWNAVS[this.props.nav]

		return <header>
			<h1>{APPNAME}</h1>
			<RenderNav />
		</header>
	}
}

export default Header