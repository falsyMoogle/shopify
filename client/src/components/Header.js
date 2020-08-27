import React from 'react'
import Sidebar from '../layout/Sidebar'

const Header = () => {
	return (
		<header className='app__header'>
			<Sidebar />
			<h2 className='app__header-brand'>
				<a href='/'>Shopify</a>
			</h2>
			<div className='app__header__profile'>
				<span className='app__header__profile-notification'>
					<i className='far fa-bell'></i>
				</span>
				<span>Current user</span>
			</div>
		</header>
	)
}

export default Header
