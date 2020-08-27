import React from 'react'

const Avatar = ({ img, alt, className }) => {
	return <img className={`avatar ${className}`} src={img} alt={alt} />
}

export default Avatar
