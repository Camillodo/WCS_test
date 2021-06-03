// == Import
import React from 'react';

import hi from './img/hi.gif';
import './style.scss';

// == Component
const App = () => (
  <div className="app">
    <img src={hi} alt="hi" />
    <h1>Hi how are you?</h1>
  </div>
);

// == Export
export default App;
