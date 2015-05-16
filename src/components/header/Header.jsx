import React from 'react'
import app from '../../App'

import ViewNavigation from './ViewNavigation.jsx!'

class Header extends React.Component {

	render() {
		return <header>
			<h1>{app.data.appname}</h1>
			<ViewNavigation />
		</header>
	}
}

export default Header