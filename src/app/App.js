import app from 'ampersand-app'
import React from 'react'
import ViewState from '../state/ViewState'
import TaskListState from '../state/TaskListState'
import AppView from '../components/views/AppView.jsx!'

export default app.extend({

	boot() {

		this.viewState = new ViewState({
			currentView: 'tasks:view'
		})

		this.taskListState = new TaskListState({
			currentList: 'now'
		})

		React.render(
			<AppView />,
			document.getElementById('app')
		)
	}
})
