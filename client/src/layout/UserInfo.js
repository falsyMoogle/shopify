import React from 'react'

import Avatar from './utils/Avatar'

const UserInfo = ({ user }) => {
	return (
		<div className='user-info'>
			<div className='user-info__header'>
				<Avatar name={user.name} />
				<span>{user.name}</span>
			</div>
			<div className='user-info__content'>
				<p className='user-info__content-data'>
					<span>Shop:</span> {user.shop}
				</p>
				<p className='user-info__content-data'>
					<span>Role:</span> {user.role}
				</p>
			</div>
		</div>
	)
}

export default UserInfo
