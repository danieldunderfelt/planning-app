import React from 'react'

class NavItem extends React.Component {

	constructor() {
		super()
	}

	handleNavClick(e) {
		e.preventDefault()
		this.props.onClick(this.props.value)
	}

	render() {
		let activeClass = this.props.viewState.view === this.props.value ? "--active" : ""
		return (
			<li className={'nav-item ' + activeClass}>
				<a href="#" className="nav-item__anchor" onClick={this.handleNavClick.bind(this)}>{this.props.label}</a>
			</li>
		)
	}
}

export default NavItem