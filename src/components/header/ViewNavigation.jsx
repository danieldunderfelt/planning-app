import React from 'react'
import app from '../../App'

import NavItem from './NavItem.jsx!'

class ViewNavigation extends React.Component {

	render() {
		return <nav>
			<NavItem viewKey="now">Now</NavItem>
			<NavItem viewKey="future">Future</NavItem>
			<NavItem viewKey="longterm">Long term</NavItem>
		</nav>
	}
}

export default ViewNavigation