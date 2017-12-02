import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Navigation from './components/navigation'
import Parse from '../parse/client'

const App = () => (
	<Router>
	    <div>
		    <ul>
		    	<li><a href="/">Home</a></li>
		        <li><Link to="/backend/">Backend</Link></li>
		        <li><Link to="/backend/login">Login</Link></li>
		        <li><Link to="/backend/logout">Logout</Link></li>
		    </ul>
		
		    <hr/>
		
		    <Route exact path="/backend/" component={Navigation}/>
		    <Route path="/backend/login" component={Navigation}/>
		    <Route path="/backend/logout" component={Navigation}/>
	    </div>
	</Router>
)

ReactDOM.render(
	<App />,
	document.getElementById('react-app')
);

export default App;