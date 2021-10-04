import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Home.css'

// Components
import NavBar from '../Components/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="Home__home-text">
        <h1>Welcome</h1>
        <p>Choose a version above or below</p>
        <div className="Home__links">
          <NavLink to="/with-json" className="Home__btn-link">Version with JSON</NavLink>
          <NavLink to="/with-api" className="Home__btn-link">Version with API</NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
