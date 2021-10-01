import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="NavBar__nav">
        <NavLink exact to="/">MovieDB <i className="fa-solid fa-film"></i></NavLink>
        <div className="NavBar__versions">
          <NavLink exact to="/with-json">Version with json</NavLink>
          <NavLink exact to="/with-api">Version with API</NavLink>
        </div>
       
      </nav>
    </div>
  )
}

export default NavBar;