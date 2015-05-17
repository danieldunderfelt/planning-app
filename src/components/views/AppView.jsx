import React from 'react'
import app from 'ampersand-app'
import ViewRenderer from './ViewRenderer.jsx!'

class AppView extends React.Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {
		return <div className="app-container">
			<ViewRenderer />
		</div>
	}
}

export default AppView