import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/">MovieDB <i class="fa-solid fa-film"></i></NavLink>
        <NavLink exact to="/with-json">Version with json</NavLink>
        <NavLink exact to="/with-api">Version with API</NavLink>
      </nav>
    </div>
  )
}

export default NavBar;