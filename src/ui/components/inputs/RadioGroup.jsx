import React from 'react'
import Input from 'react-bootstrap/lib/Input'
let p = React.PropTypes

class RadioGroup extends React.Component {

	constructor() {
		super()

		this.state = {
			value: ""
		}
	}

	componentWillMount() {
		this.setState({
			value: this.props.selectedValue
		})
	}

	getValue() {
		return this.state.value
	}

	onChange(value) {
		this.setState({
			value: value
		})

		this.props.onChange
	}

	render() {
		let {name, selectedValue, children} = this.props
		return (
			<div>
				{React.Children.map(
					this.props.children,
					child => React.cloneElement(child, newProps, ...newChildren))
				}
			</div>
		)
	}
}

RadioGroup.propTypes = {
	name: p.string,
	selectedValue: p.oneOfType([p.string, p.number]),
	onChange: p.func,
	children: p.func
}

export default RadioGroup