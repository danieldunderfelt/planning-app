import React from 'react'
import Router from 'react-router'
const Route = Router.Route
const DefaultRoute = Router.DefaultRoute

import AppView from './ui/AppView.jsx!'
import TaskView from './ui/views/TaskView.jsx!'

const routes = (
	<Route handler={AppView} path="/">
		<DefaultRoute handler={TaskView}/>
	</Route>
)

export default routes