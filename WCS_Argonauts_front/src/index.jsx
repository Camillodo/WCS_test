// == Import
import React from 'react';
import { render } from 'react-dom';

// Component
import App from './components/App/App';

// == Render
const rootReactElement = <App />;
const target = document.getElementById('root');
render(rootReactElement, target);
