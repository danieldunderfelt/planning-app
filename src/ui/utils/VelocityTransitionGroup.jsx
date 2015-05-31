import React from 'react'
import Velocity from 'velocity-animate'
var ReactTransitionGroup = React.addons.TransitionGroup

var transitions = {
	'slide-forward': {
		duration: 200,
		enter: {
			translateX: [ '0%', '100%' ],
		},
		leave: {
			translateX: [ '-100%', '0%' ],
		}
	},
	'slide-back': {
		duration: 200,
		enter: {
			translateX: [ '0%', '-100%' ],
		},
		leave: {
			translateX: [ '100%', '0%' ],
		}
	},
	'slideover-forward': {
		duration: 200,
		enter: {
			translateX: [ '0%', '100%' ],
			zIndex: [ 1, 1 ]
		},
		leave: {
			// translateX: [ '0%', '0%' ],
			zIndex: [ 0, 0 ]
		}
	},
	'slideover-back': {
		duration: 200,
		enter: {
			// translateX: [ '0%', '0%' ],
			zIndex: [ 0, 0 ]
		},
		leave: {
			translateX: [ '100%', '0%' ],
			zIndex: [ 1, 1 ]
		}
	},
	default: {
		duration: 200,
		enter: {
			opacity: [ 1, 0 ],
		},
		leave: {
			opacity: [ 0, 1 ],
		}
	}
}

class VelocityTransitionGroupChild extends React.Component {
	propTypes = {
		transitionName: React.PropTypes.string.isRequired
	}

	_getTransition = function() {
		if (!transitions[this.props.transitionName]) {
			console.warn('TransitionName ' + this.props.transitionName + ' wasn\'t found in VelocityTransitionGroupChild transitions.')
		}
		return transitions[this.props.transitionName] || transitions.default
	}

	componentWillEnter(done) {
		var node = this.getDOMNode()
		var transition = this._getTransition()
		Velocity(node, transition.enter, {
			duration: transition.duration,
			complete: done
		})
	}

	componentWillLeave(done) {
		var node = this.getDOMNode()
		var transition = this._getTransition()
		Velocity(node, transition.leave, {
			duration: transition.duration,
			complete: done
		})
	}

	render() {
		return React.Children.only(this.props.children)
	}
}

class VelocityTransitionGroup extends React.Component {
	propTypes = {
		transitionName: React.PropTypes.string.isRequired
	}

	_wrapChild(child) {
		return <VelocityTransitionGroupChild transitionName={this.props.transitionName}>
			{child}
		</VelocityTransitionGroupChild>
	}

	render() {
		return <ReactTransitionGroup {...this.props} childFactory={this._wrapChild} />
	}
}