import React, { useState, useEffect } from 'react'

const Avatar = ({ img, alt, name, classNames }) => {
	const [initials, setInitials] = useState('')

	useEffect(() => {
		const getUserInitials = async () => {
			const getName = await name
			const splitNames = getName.split(' ')
			const result =
				splitNames.length > 1
					? splitNames[0][0] + splitNames[1][0]
					: splitNames[0][0]
			setInitials(result)
		}
		getUserInitials()
	}, [name])

	return (
		<>
			{img ? (
				<img className={`avatar ${classNames}`} src={img} alt={alt} />
			) : (
				<div className={`avatar--replace ${classNames}`}>
					{initials.toUpperCase()}
				</div>
			)}
		</>
	)
}

export default Avatar
