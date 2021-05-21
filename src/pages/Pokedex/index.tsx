/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../API/data.json';
import s from './Pokedex.module.scss';

interface Props {
  title: string;
}

const PokedexPage: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <Header />
      <div className={s.pokedex}>
        <Heading tag="h2">
          {POKEMONS.length} <b>Pokemons</b> for you to choose favorite for {title} page!
        </Heading>
        <div className={s.Wrapper}>
          {POKEMONS.map(({ id, name, stats, types, img }) => (
            <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} types={types} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
