import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor (props) {
  	super (props)
  }
  render() {
  	return (
  	  <div>The website is under maintenance and will be back soon</div>	
  	)
  }
}

render(<App />, document.getElementById('app'));