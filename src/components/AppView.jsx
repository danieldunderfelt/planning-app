import React from 'react'
import app from '../App'

import Header from './header/Header.jsx!'
import TaskListView from './views/TaskListView.jsx!'

class AppView extends React.Component {

	render() {
		return <section className="app-container">
			<Header />
			<TaskListView />
		</section>
	}
}

export default AppView