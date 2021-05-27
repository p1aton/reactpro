/* eslint-disable no-console */
import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFound';
import routes from './routes';
import Header from './components/Header';
// import { PokemonContext } from './context/pokemonContext';

interface PokContext {
  value: [];
  onSelectedPokemons: (arg: number | null) => void;
}

const App: React.FC<PokContext> = () => {
  // const [selectedPokemons, setSelectedPokemons] = useState({});
  const match = useRoutes(routes);

  // const handleSelectedPokemons = () => {
  //   console.log('#####: handleSelectedPokemons')
  // }

  return match ? (
    // <PokemonContext.Provider  value={{
    //   pokemon: selectedPokemons,
    //   onSelectedPokemons: handleSelectedPokemons
    // }}>
    <>
      <Header />
      {match}
    </>
  ) : (
    // </PokemonContext.Provider>
    <NotFoundPage />
  );
};

export default App;
