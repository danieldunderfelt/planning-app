import React from 'react'
import Router from 'react-router'
import routes from '../routes'

export class App {

	boot() {

		Router.run(routes, (Root) => {
			React.render(<Root/>, document.getElementById('app'));
		})
	}
}

export default App