import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../src/styles/index.css';

window.addEventListener('load', () => {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
});
