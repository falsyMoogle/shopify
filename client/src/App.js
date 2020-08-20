import React from 'react'

import Header from './components/Header'
import LoginForm from './components/LoginForm'

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='app__content'>
				<LoginForm />
			</div>
		</div>
	)
}

export default App
