import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* this component coming from app.js file */}
  </React.StrictMode>,
  document.getElementById('root') 
  // after transfer components gets transferred to div with id root in index.html file
);

