import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
// Pages
import Home from './Pages/Home'
import Login from './Pages/Login'
import MenageItems from './Pages/AddItems'

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<div className='app__content'>
					<Switch>
						<Route path='/' component={Home} exact />
						<Route path='/additems' component={MenageItems} />
						<Route path='/login' component={Login} />
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
