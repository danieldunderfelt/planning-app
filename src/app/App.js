import React from 'react'
import Router from 'react-router'
import routes from '../routes'
import Alt from './Alt'
import TaskStore from '../stores/TaskStore'

class App {

	boot() {
		TaskStore.getTasks()

		Router.run(routes, Router.HashLocation, (Handler) => {
			React.render( <Handler/>, document.getElementById('app') )
		})
	}
}

export default App