import React from 'react'
import Input from 'react-bootstrap/lib/Input'
let p = React.PropTypes

function radio(name, selectedValue, onChange) {
	return class _inputWrapper extends React.Component {

		render() {
			return (
				<Input
					{...this.props}
					type="radio"
					name={name}
					checked={this.props.value === selectedValue}
					onChange={onChange.bind(null, this.props.value)} />
			)
		}
	}
}

class RadioGroup extends React.Component {

	constructor() {
		super()
	}

	render() {
		let {name, selectedValue, children, onChange} = this.props
		return (
			<div>
				{children && children(radio(name, selectedValue, onChange))}
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