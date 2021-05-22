/* eslint-disable no-console */
import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFound';
import routes from './routes';
import Header from './components/Header';
// import req from './utils/request';

const App = () => {
  // req().then(data => console.log('#####: data', data))
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
