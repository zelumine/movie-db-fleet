import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue !</h1>
      <p>Etant donné qu'il fallait faire une version avec le fichier json, 
        et une en utilisant l'API de TheMovieDB, voici un lien pour chaque version.
        <br />(au lieu de faire deux repositories)</p>
      <NavLink to="/with-json">Version avec json</NavLink>
      <NavLink to="/with-api">Version avec l'API</NavLink>
    </div>
  )
}

export default HomePage;
