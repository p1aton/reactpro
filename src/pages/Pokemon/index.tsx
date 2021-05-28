/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React from 'react';
import cn from 'classnames';
import useData from '../../Hook/getData';

import s from './Pokemon.module.scss';
import Heading from '../../components/Heading';
import { IPokemons } from '../Pokedex/interface';

export interface PokemonProps {
  id: string | number;
  name?: string;
  limit?: number;
  // current?: object,
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data } = useData<IPokemons>('getPokemons', { limit: 1050 }, []);

  const current = data?.pokemons[(id as number) - 1];

  return current ? (
    <div className={s.root}>
      <div className={s.wrapper}>
        <span className={s.close} />
        <div className={s.card}>
          <div className={cn(s.image, current.types[0])}>
            <img src={current.img} alt={current.name} />
            <div className={s.types}>
              {current.types.map((item, index) => (
                <span key={index} className={cn(s.label, item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={s.text}>
            <div className={s.title_row}>
              <Heading tag="h3" className={cn(s.title, s.title_primary)}>
                {current.name}
              </Heading>
              <div className={s.title_right}>
                <Heading tag="h4" className={cn(s.title, s.title_secondary)}>
                  Generation {current.order}
                </Heading>
              </div>
            </div>

            <div className={s.info}>
              <div className={cn(s.abilities, s.whiteBlock)}>
                <p>Abilities</p>
                <div className={s.abilities_items}>
                  {current?.abilities.map((item, index) => (
                    <p key={index}>
                      {item}
                      <span className={s.divider}>&nbsp;-&nbsp;</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className={cn(s.health, s.whiteBlock)}>
                <div className={s.progress}>
                  <p>Healthy Points</p>
                  <strong>{current.stats.hp}</strong>
                </div>
                <div className={s.progress}>
                  <p>Experience</p>
                  <strong>1 000 000</strong>
                </div>
              </div>
              <div className={s.stats}>
                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{current.stats.defense}</p>
                  <p className={s.stats_text}>Defense</p>
                </div>

                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{current.stats.attack}</p>
                  <p className={s.stats_text}>Attack</p>
                </div>

                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{current.stats['special-attack']}</p>
                  <p className={s.stats_text}>Sp Attack</p>
                </div>

                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{current.stats['special-defense']}</p>
                  <p className={s.stats_text}>Sp Defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Pokemon;
