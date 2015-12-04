import React from 'react'

import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (<div>
    	<h3>Hello World</h3>
    	<ul>
    		<li>
    			<Link to="/welcome">welcome</Link>
    		</li>
    		<li>
    			<Link to="/about">About</Link>
    		</li>
    	</ul>
    	<div>
    		{this.props.children}
    	</div>
    </div>)
  }
}

export default App