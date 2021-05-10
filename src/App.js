import React from 'react';
import s from './App.modules.scss';
import './custom.css';

const App = () => {
  return (
    <div className = {s.header + ' color'}>
      Yes we Did it! This is App component!
    </div>
  )
}

export default App;