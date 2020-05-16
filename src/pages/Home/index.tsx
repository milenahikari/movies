import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import TredingMovies from '../../components/TrendingMovies';
import Movies from '../../components/Movies';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TredingMovies />
        <Movies />
      </Container>
    </>
  );
};

export default Home;
