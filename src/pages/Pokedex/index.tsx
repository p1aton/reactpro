/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
// import POKEMONS from '../../API/data.json';
import s from './Pokedex.module.scss';
import IPokemonCard from './interface';
import req from '../../utils/request';

interface Api {
  total: number;
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemonCard[];
}

interface Data {
  data?: Api;
  isLoading?: boolean;
  isError?: boolean;
}

const usePokemons = () => {
  const [data, setData] = useState({} as Api);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);

      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC<Data> = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <div className={s.pokedex}>
        <Heading tag="h2">
          {data && data.total} <b>Pokemons</b> for you to choose!
        </Heading>
        <div className={s.Wrapper}>
          {/* {data && data.pokemons.map((item: IPokemonCard) => <div>{item.name}</div>)} */}
          {data &&
            data.pokemons.map(({ id, name, stats, types, img }) => (
              <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} types={types} img={img} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
