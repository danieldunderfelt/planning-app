import Model from 'ampersand-model'

import Timeslot from './Timeslot'
import Tasks from './Tasks'

export default Model.extend({
	props: {
		title: 'string',
		completed: 'boolean',
		longTerm: 'boolean',
		userPriority: 'number',
		size: 'number',
		date: 'string',
		recurrent: 'boolean',
		weekdays: 'array',
		id: 'number'
	},

	collections: {
		pre: Tasks,
		post: Tasks,
		sub: Tasks
	},

	children: {
		timeslot: Timeslot
	}
})