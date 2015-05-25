import React from 'react'
import Router from 'react-router'

const RouteHandler = Router.RouteHandler

class AppView extends React.Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {
		return <div className="app__frame">
			<h1>Planning app!</h1>
			<RouteHandler />
		</div>
	}
}

export default AppView