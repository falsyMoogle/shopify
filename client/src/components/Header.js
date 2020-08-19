import React from 'react'

const Header = () => {
	return (
		<header className='app__header'>
			<i className='fas fa-list'></i>
			<h2 className='app__header-brand'>
				<a href='/'>Shopify</a>
			</h2>
			<div className='app__header-profile'>
				<span className='app__header-profile__notification'>
					<i className='far fa-bell'></i>
				</span>
				<span>User Profile</span>
			</div>
		</header>
	)
}

export default Header
