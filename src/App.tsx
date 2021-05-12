import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

const App = () => {
  return <div className={cn(s.header, s.color)}>Yes we Did it! This is App component!</div>;
};

export default App;
