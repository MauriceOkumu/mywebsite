import React from 'react';
import styles from './about.css'

class About extends React.Component {
  constructor(props) {
  	super(props)
  }
  render () {
  	return (
  	  <div className={styles.container}>This is where I will talk about myself</div>
  	)
  }
}

export default About;