/* eslint-disable no-console */
import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import RocketTrio from './assets/rocket_trio.png';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

interface Props {}

const NotFoundPage = (props: Props) => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={RocketTrio} alt="TeamRocket" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <div className={s.button}>
            <Button color="yellow" size="large" onClick={() => navigate(LinkEnum.HOME)}>
              Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
