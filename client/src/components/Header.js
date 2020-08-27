import React from 'react'

import Sidebar from '../layout/Sidebar'
import IconButton from '../layout/utils/IconButton'

const Header = () => {
	return (
		<header className='app__header'>
			<Sidebar />
			<h2 className='app__header-brand'>
				<a href='/'>Shopify</a>
			</h2>
			<div className='app__header__profile'>
				<span className='app__header__profile-notification'>
					<IconButton icon={'far fa-bell'} />
				</span>
				<span>Current user</span>
			</div>
		</header>
	)
}

export default Header
