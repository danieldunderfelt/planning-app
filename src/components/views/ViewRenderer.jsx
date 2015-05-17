import React from 'react'
import app from 'ampersand-app'

import TaskListView from './TaskListView.jsx!'

const APP_VIEWS = {
	"tasks:view": TaskListView
}

class ViewRenderer extends React.Component {

	constructor() {
		super()

		this.state = {
			view: APP_VIEWS[app.viewState.get('currentView')]
		}
	}

	render() {
		return <div>
			<this.state.view />
		</div>
	}
}

export default ViewRenderer