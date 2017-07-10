import React from 'react';
import styles from './navbar.css';

const NavBarIn = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/feed">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">About</a></li>
          <li><a href="/logout">Contact Me</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBarIn;