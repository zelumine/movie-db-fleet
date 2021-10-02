import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="NavBar__nav">
        <div id="logo">MovieDB <i className="fa-solid fa-film"></i></div>
        <div className="NavBar__versions">
          <NavLink exact to="/with-json">Version with JSON</NavLink>
          <NavLink exact to="/with-api">Version with API</NavLink>
        </div>
       
      </nav>
    </div>
  )
}

export default NavBar;