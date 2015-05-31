import React from 'react'
import classname from 'classnames'

class NavItem extends React.Component {

	constructor() {
		super()
	}

	handleNavClick(e) {
		e.preventDefault()
		this.props.onClick(this.props.value)
	}

	render() {
		let classes = classname({
			"nav-item": true,
			"--active": this.props.view === this.props.value
		})

		return (
			<li className={classes}>
				<a href="#" className="nav-item__anchor" onClick={this.handleNavClick.bind(this)}>{this.props.label}</a>
			</li>
		)
	}
}

export default NavItem