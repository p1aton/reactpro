/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
// import POKEMONS from '../../API/data.json';
import s from './Pokedex.module.scss';
// import IPokemonCard from './interface';
import { IPokemons } from './interface';
import req from '../../utils/request';
import useData from '../../Hook/getData';
import useDebounce from '../../Hook/useDebounce';

interface Api {
  total: number;
  count: number;
  limit: number;
  offset: number;
  // pokemons: IPokemonCard[];
  pokemons: IPokemons[];
}

interface Data {
  data?: Api;
  isLoading?: boolean;
  isError?: boolean;
}

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage: React.FC<Data> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 1000);

  // const query = useMemo(() => ({
  //   name: searchValue
  // }), [searchValue]);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  // useEffect(() => {
  //   console.log('#####: debouncedValue', debouncedValue)
  // }, [debouncedValue])

  const handleSearchChange = (e: any) => {
    // console.log('#####: e', e.target.value);
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

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
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose!
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.Wrapper}>
          {/* {data && data.pokemons.map((item: IPokemonCard) => <div>{item.name}</div>)} */}
          {!isLoading &&
            data &&
            data.pokemons.map(({ id, name, stats, types, img }) => (
              <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} types={types} img={img} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
