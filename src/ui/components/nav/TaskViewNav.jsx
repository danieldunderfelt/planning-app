import React from 'react'
import Alt from '../../../app/Alt'
import TaskViewStore from '../../../stores/TaskViewStore'
import AltContainer from '../../utils/AltContainer'

import NavItem from './NavItem.jsx!'

class TaskViewNav extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <ul className="nav-list">
			<AltContainer stores={{
				view: props => {
					return {
						store: TaskViewStore,
						value: TaskViewStore.getState().get('view')
					}
				}
			}} actions={ props => {
				return {
					// Decoupling action from nav item
					onClick: (data) => {
						return Alt.actions.TaskViewActions.setView(data)
					}
				}
			}}>
				<NavItem label="Now" value="now" />
				<NavItem label="Future" value="future" />
				<NavItem label="Long term" value="longterm" />
			</AltContainer>
		</ul>
	}
}

export default TaskViewNav