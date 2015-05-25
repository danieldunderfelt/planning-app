import React from 'react'
import Router from 'react-router'
import routes from '../routes'

export class App {

	boot() {
		console.log("hello?")
		Router.run(routes, Router.HistoryLocation, (Root) => {
			React.render(<Root/>, document.getElementById('app'));
		})
	}
}

export default App