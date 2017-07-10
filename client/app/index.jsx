import React from 'react';
import { render } from 'react-dom';
import  About from './about.jsx';
import Picture from './picture.jsx';
import NavBarIn from './navbar.jsx';

class App extends React.Component {
  constructor (props) {
  	super (props)
  }
  render() {
  	return (
  	  <div>
      <NavBarIn />	
  	  <div>The website is under<strong> good ol' maintenance </strong>and will be back soon</div>
  	  <About />
      <Picture />
  	  </div>	
  	)
  }
}

render(<App />, document.getElementById('app'));