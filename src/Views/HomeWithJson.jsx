import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomeWithJson extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Retour</NavLink>
        <h1>Coucou depuis la home avec json</h1>
      </div>
    )
  }
}
export default HomeWithJson;