import State from 'ampersand-state'

var ViewState = State.extend({
	typeAttribute: 'view',
	props: {
		currentView: 'string'
	}
})

export default ViewState