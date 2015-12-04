import React from 'react'
import ReactDOM from 'react-dom';
import Welcome from './components/welcome.jsx'

function main() {
	ReactDOM.render(<Welcome />, document.getElementById('app'))
}

main()