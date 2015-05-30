import React from 'react'
import Router from 'react-router'
let RouteHandler = Router.RouteHandler

class AppView extends React.Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {
		return <div>
			<h1>Planning app!</h1>
			<RouteHandler/>
		</div>
	}
}

export default AppView