import React from 'react';
import { render } from 'react-dom';
import  About from './about.jsx';
import Picture from './picture.jsx';
import NavBarIn from './navbar.jsx';

class App extends React.Component {
  constructor (props) {
  	super (props)
    this.state = {
      clicked : false,
      innerText : false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
   this.setState({ 
     clicked: !this.state.clicked,
     innerText: !this.state.innerText
   })
  }
 
  render() {
  	return (
  	  <div>
      <NavBarIn />	
  	  <div id="about" onClick={this.handleClick}>{!this.state.innerText ? <a href="#">Click to Read more about me..</a> : <a href="#">Show less..</a>}
         {this.state.clicked ? <About /> : null}
      </div>
      <Picture />
  	  </div>	
  	)
  }
}

render(<App />, document.getElementById('app'));