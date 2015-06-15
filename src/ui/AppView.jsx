import React from 'react'
import Router from 'react-router'
import mui from 'mui'
import rbs from 'react-bootstrap'
let ThemeManager = new mui.Styles.ThemeManager()
let RouteHandler = Router.RouteHandler
let {Grid} = rbs

class AppView extends React.Component {

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	}

	render() {
		return (
			<Grid>
				<div>
					<h1>Planning app!</h1>
					<RouteHandler/>
				</div>
			</Grid>
		)
	}
}

AppView.childContextTypes = {
	muiTheme: React.PropTypes.object
}

export default AppView