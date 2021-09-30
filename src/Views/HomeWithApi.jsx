import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import NavBar from '../Components/NavBar';

class HomeWithApi extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Coucou depuis la home avec API</h1>
      </div>
    )
  }
}

export default HomeWithApi;
