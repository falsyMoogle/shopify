import React, { useState, useRef } from 'react'

import { CSSTransition } from 'react-transition-group'
import { useOnClickOutside } from '../hooks/hooks'

import FlatIcon from './utils/FlatIcon'

const Sidebar = () => {
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
			<span onClick={sidebarHandler}>
				<i className='sidebar-button fas fa-align-justify'></i>
			</span>

			<CSSTransition
				nodeRef={sidebarNode}
				in={sidebarOpen}
				unmountOnExit
				classNames='menu'
				timeout={500}
			>
				<nav className='sidebar' ref={sidebarNode}>
					<ul className='sidebar__list'>
						<li className='sidebar__list__item'>
							<FlatIcon icon='fas fa-box-open' />
							<span className='sidebar__list__item-text'>NavLink 1</span>
						</li>
						<li className='sidebar__list__item'>
							<FlatIcon icon='fas fa-box-open' />
							<span className='sidebar__list__item-text'>NavLink 2</span>
						</li>
						<li className='sidebar__list__item'>
							<FlatIcon icon='fas fa-box-open' />
							<span className='sidebar__list__item-text'>NavLink 3</span>
						</li>
					</ul>
				</nav>
			</CSSTransition>
		</div>
	)
}

export default Sidebar
