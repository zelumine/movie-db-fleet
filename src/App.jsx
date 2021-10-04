import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';

// Views
import HomePage from './Views/HomePage';
import HomeWithJson from './Views/HomeWithJson';
import HomeWithApi from './Views/HomeWithApi';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/with-json" component={HomeWithJson} />
        <Route exact path="/with-api" component={HomeWithApi} /> 
      </Switch>
    </div>
  );
}

export default App;
