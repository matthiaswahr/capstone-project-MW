import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Globalstyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Globalstyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
