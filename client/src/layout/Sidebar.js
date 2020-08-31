import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'
import { useOnClickOutside } from '../hooks/hooks'

import FlatIcon from './utils/FlatIcon'
import IconButton from './utils/IconButton'
import UserInfo from './UserInfo'

const Sidebar = ({ user }) => {
	const componentNode = useRef(null)
	const sidebarNode = useRef(null)
	const [sidebarOpen, setSidebarOpen] = useState(false)

	// close sidebar when click outside of navitem
	const clickOutside = () => {
		setSidebarOpen(false)
	}

	const sidebarHandler = () => {
		setSidebarOpen(!sidebarOpen)
	}

	useOnClickOutside(componentNode, clickOutside)
	return (
		<div ref={componentNode}>
			<IconButton onClick={sidebarHandler}>
				<i className='fas fa-align-justify'></i>
			</IconButton>

			<CSSTransition
				nodeRef={sidebarNode}
				in={sidebarOpen}
				unmountOnExit
				classNames='menu'
				timeout={400}
			>
				<nav className='sidebar' ref={sidebarNode}>
					<UserInfo user={user} />

					<ul className='sidebar__list'>
						<Link to='/' className='sidebar__list__item'>
							<FlatIcon icon='fas fa-box-open' />
							<span className='sidebar__list__item-text'>Home</span>
						</Link>
						<Link to='/additems' className='sidebar__list__item'>
							<FlatIcon icon='fas fa-box-open' />
							<span className='sidebar__list__item-text'>Expire items</span>
						</Link>
					</ul>
				</nav>
			</CSSTransition>
		</div>
	)
}

export default Sidebar
