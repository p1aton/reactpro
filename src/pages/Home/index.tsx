/* eslint-disable no-console */
import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import s from './Home.module.scss';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading size="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading size="p">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button color="yellow" size="great" onClick={() => console.log('Click Button')}>
            See pokemons
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
