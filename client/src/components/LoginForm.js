import React from 'react'

const LoginForm = () => {
	return (
		<form className='login-form'>
			<div className='login-form__header'>
				<i className='fas fa-sign-in-alt'></i>
				<h2>Login</h2>
			</div>
			<div className='login-form--wrapper'>
				<div className='login-form__input'>
					<label htmlFor='login-email'>Email</label>
					<input id='login-email' />
				</div>
				<div className='login-form__input'>
					<label htmlFor='login-password'>Password</label>
					<input id='login-password' />
				</div>
				<button className='btn btn-lg'>Login</button>
			</div>
		</form>
	)
}

export default LoginForm
