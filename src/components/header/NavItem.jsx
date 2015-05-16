import React from 'react'
import app from '../../App'

class NavItem extends React.Component {

	handleClick(e) {
		console.log("Nav item clicked")
	}

	render() {
		return <li activateView={this.props.viewKey} className={this.props.viewKey === app.currentView ? "active" : ""}>
			<a onClick={this.handleClick}>{this.props.children}</a>
		</li>
	}
}

export default NavItem