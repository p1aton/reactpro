/* eslint-disable import/no-unresolved */
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
  console.log('🚀 ~ file: index.tsx ~ line 19 ~ id', id);

  const { data, isLoading } = useData<IPokemons>('getPokemon', { id }, []);
  console.log('🚀 ~ file: index.tsx ~ line 21 ~ id', id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data ? (
    <div className={s.root}>
      <div className={s.wrapper}>
        <span className={s.close} />
        <div className={s.card}>
          <div className={cn(s.image, data.types[0])}>
            <img src={data.img} alt={data.name} />
            <div className={s.types}>
              {data.types.map((item: {} | null | undefined, index: React.Key | null | undefined) => (
                <span key={index} className={cn(s.label, item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={s.text}>
            <div className={s.title_row}>
              <Heading tag="h3" className={cn(s.title, s.title_primary)}>
                {data.name}
              </Heading>
              <div className={s.title_right}>
                <Heading tag="h4" className={cn(s.title, s.title_secondary)}>
                  Generation {data.order}
                </Heading>
              </div>
            </div>

            <div className={s.info}>
              <div className={cn(s.abilities, s.whiteBlock)}>
                <p>Abilities</p>
                <div className={s.abilities_items}>
                  {data?.abilities.map(
                    (
                      item:
                        | string
                        | number
                        | boolean
                        | {}
                        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                        | React.ReactNodeArray
                        | React.ReactPortal
                        | null
                        | undefined,
                      index: React.Key | null | undefined,
                    ) => (
                      <p key={index}>
                        {item}
                        <span className={s.divider}>&nbsp;-&nbsp;</span>
                      </p>
                    ),
                  )}
                </div>
              </div>
              <div className={cn(s.health, s.whiteBlock)}>
                <div className={s.progress}>
                  <p>Healthy Points</p>
                  <strong>{data.stats.hp}</strong>
                </div>
                <div className={s.progress}>
                  <p>Experience</p>
                  <strong>1 000 000</strong>
                </div>
              </div>
              <div className={s.stats}>
                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{data.stats.defense}</p>
                  <p className={s.stats_text}>Defense</p>
                </div>

                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{data.stats.attack}</p>
                  <p className={s.stats_text}>Attack</p>
                </div>

                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{data.stats['special-attack']}</p>
                  <p className={s.stats_text}>Sp Attack</p>
                </div>

                <div className={cn(s.stats_block, s.whiteBlock)}>
                  <p className={s.stats_number}>{data.stats['special-defense']}</p>
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
