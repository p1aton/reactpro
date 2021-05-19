/* eslint-disable no-console */
import React from 'react';
import { navigate } from 'hookrouter';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import s from './Home.module.scss';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import { LinkEnum } from '../../routes';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading tag="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button color="green" size="large" onClick={() => navigate(LinkEnum.POKEDEX)}>
            See pokemons
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
