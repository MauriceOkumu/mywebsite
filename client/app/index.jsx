import React from 'react';
import { render } from 'react-dom';
import  About from './about.jsx'

class App extends React.Component {
  constructor (props) {
  	super (props)
  }
  render() {
  	return (
  	  <div>	
  	  <div>The website is under<strong> maintenance </strong>and will be back soon</div>
  	  <About />
  	  </div>	
  	)
  }
}

render(<App />, document.getElementById('app'));