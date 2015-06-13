export let __hotReload = true
import React from 'react'
import Router from 'react-router'
const Route = Router.Route
const DefaultRoute = Router.DefaultRoute

import AppView from './ui/AppView.jsx!'
import TasksView from './ui/views/TasksView.jsx!'

const routes =
	<Route handler={AppView}>
		<DefaultRoute name="tasks" handler={TasksView}/>
		<Route name="task">
			<Route name="view-task" path="view/:id"/>
			<Route name="new-task" path="new"/>
			<DefaultRoute name="task-view-empty"/>
		</Route>
	</Route>

export default routes