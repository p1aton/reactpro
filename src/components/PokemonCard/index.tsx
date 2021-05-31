/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

export interface RootObject {
  name_clean?: string;
  abilities?: string[];
  stats: Stats;
  types: string[];
  img: string;
  name: string;
  base_experience?: number;
  height?: number;
  id?: number | string;
  is_default?: boolean;
  order?: number;
  weight?: number;
}
export interface Stats {
  hp?: number;
  attack?: number;
  defense?: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed?: number;
}

type pokemonCard = RootObject & Stats;

const PokemonCard: React.FC<pokemonCard> = ({ id, name, stats, types, img }) => {
  const handleClick = () => {
    navigate(`/pokedex/${id}`);
    console.log('🚀 ~ file: index.tsx ~ line 52 ~ handleClick ~ id', id);
  };

  return (
    <div className={s.root} data-id={id} onClick={handleClick}>
      <div className={s.infoWrap}>
        <Heading tag="h6" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
