import React from 'react'
import Router from 'react-router'
let RouteHandler = Router.RouteHandler

class AppView extends React.Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>Planning app hahah aa!</h1>
				<RouteHandler/>
			</div>
		)
	}
}

export default AppView