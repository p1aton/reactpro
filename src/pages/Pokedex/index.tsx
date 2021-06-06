/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
// import POKEMONS from '../../API/data.json';
import s from './Pokedex.module.scss';
import { IPokemons, PokemonsRequest } from './interface';
import useData from '../../Hook/getData';
import useDebounce from '../../Hook/useDebounce';
import { getTypesAction, getPokemonsTypes, getPokemonsTypesLoading } from '../../store/pokemon';

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
  name_clean?: string;
}

const PokedexPage: React.FC<Data> = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  console.log('🚀 ~ file: index.tsx ~ line 46 ~ types', types);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
  console.log('🚀 ~ file: index.tsx ~ line 48 ~ isTypesLoading', isTypesLoading);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

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
        <div>{isTypesLoading ? 'Loading...' : types?.map((item) => <div>{item}</div>)}</div>
        <div className={s.Wrapper}>
          {/* {data && data.pokemons.map((item: IPokemonCard) => <div>{item.name}</div>)} */}
          {!isLoading && data && data.pokemons.map((item: PokemonsRequest) => <PokemonCard key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
