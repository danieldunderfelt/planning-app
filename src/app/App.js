import React from 'react'
import Router from 'react-router'
import routes from '../routes'
import Alt from './Alt'

class App {

	boot() {
		Router.run(routes, Router.HashLocation, (Handler) => {
			React.render( <Handler/>, document.getElementById('app') )
		})
	}
}

export default App