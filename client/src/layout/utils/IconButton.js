import React from 'react'

const IconButton = ({ icon, classNames, ...props }) => {
	return (
		<span className={classNames} {...props}>
			<i className={icon}></i>
		</span>
	)
}

IconButton.defaultProps = {
	icon: 'fas fa-align-justify',
	classNames: 'icon-btn',
}

export default IconButton
