/* eslint-disable no-console */
import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFound';
import routes from './routes';
import Header from './components/Header';

interface PokContext {
  value: [];
  onSelectedPokemons: (arg: number | null) => void;
}

const App: React.FC<PokContext> = () => {
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
