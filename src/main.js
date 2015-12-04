import React from 'react'
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'

import App from './components/app.jsx'
import About from './components/about.jsx'
import Welcome from './components/welcome.jsx'

const history = useBasename(createHistory)({
  basename: '/'
})

ReactDOM.render((
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="welcome" component={Welcome} />
			<Route path="about" component={About} />
		</Route>
	</Router>
), 
document.getElementById("app"))