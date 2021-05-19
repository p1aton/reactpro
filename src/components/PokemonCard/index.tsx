/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

export interface RootObject {
  types?: string[];
  img: string;
  name: string;
  base_experience?: number;
  height?: number;
  id?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
}

const PokemonCard: React.FC<RootObject> = ({
  img,
  name,
  base_experience,
  height,
  id,
  is_default,
  order,
  weight,
  types,
}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading tag="h6" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{order}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{base_experience}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
