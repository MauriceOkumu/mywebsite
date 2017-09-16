import React from 'react';
import Pic from './pics/IMG_3222.jpg'

class Picture extends React.Component{
  constructor(props) {
  	super(props)
  }	
  render() {
  	return (
  	  <div>
  	  	<img src={Pic}/>
  	  </div>	
  	)
  }
}

export default Picture;