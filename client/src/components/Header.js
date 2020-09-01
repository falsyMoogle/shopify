import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../layout/Sidebar'
import IconButton from '../layout/utils/IconButton'

const Header = () => {
	const [testUser] = useState({
		name: 'Nikolay Nazarov',
		email: 'nazarov-test@gmail.com',
		role: 'user',
		shop: 'Vosstaniya',
		profileImg: '',
	})

	return (
		<header className='app__header'>
			<Sidebar user={testUser} />
			<h2 className='app__header-brand'>
				<Link to='/'>Shopify</Link>
			</h2>
			<div className='app__header__profile'>
				<span className='app__header__profile-notification'>
					<IconButton icon={'far fa-bell'} />
				</span>
				<span>{testUser.name.split(' ')[0]}</span>
			</div>
		</header>
	)
}

export default Header
