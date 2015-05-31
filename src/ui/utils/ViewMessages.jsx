import React from 'react'

const ViewMessages =  {

	loading() {
		return (
			<div className="message --loading">
				<div className="message__body">
					Loading...
				</div>
			</div>
		)
	},

	error() {
		return (
			<div className="message --error">
				<div className="message__body">
					Error!
				</div>
			</div>
		)
	}
}

export default ViewMessages