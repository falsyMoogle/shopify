import React from 'react'

import Avatar from './utils/Avatar'

const UserInfo = ({ user }) => {
	return (
		<div className='user-info'>
			<div className='user-info__header'>
				<Avatar name={user.name} />
				<span>{user.name}</span>
			</div>
		</div>
	)
}

export default UserInfo
