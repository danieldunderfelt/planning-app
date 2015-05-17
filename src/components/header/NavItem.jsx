import React from 'react'
import app from 'ampersand-app'

class NavItem extends React.Component {

	onClick(e) {
		e.preventDefault()
		app.taskListState.set('currentList', this.props.viewKey)
	}

	render() {
		return <li className={this.props.active ? "active" : ""}>
			<a href="#" onClick={this.onClick.bind(this)}>{this.props.children}</a>
		</li>
	}
}

export default NavItem