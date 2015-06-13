export let __hotReload = true
import tapPlugin from 'react-tap-event-plugin'
import App from './app/App'

(() => {
	tapPlugin()

	let app = new App()
	app.boot()
})()