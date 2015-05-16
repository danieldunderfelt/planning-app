import app from 'ampersand-app'
import React from 'react'
import AppView from './components/AppView.jsx!'
import internalData from './internalData'

export default app.extend({

	data: internalData,
	currentView: "now",

	boot() {
		console.log("App booting")

		React.render(
			<AppView />,
			document.getElementById('app')
		)
	}
})