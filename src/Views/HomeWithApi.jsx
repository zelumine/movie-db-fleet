import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomeWithApi extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Retour</NavLink>
        <h1>Coucou depuis la home avec API</h1>
      </div>
    )
  }
}

export default HomeWithApi;
