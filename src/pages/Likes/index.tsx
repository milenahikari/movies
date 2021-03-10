import React, { useEffect, useState } from 'react';

import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { Container, ContentMovies, CardMovie } from './styles';

import { useLike } from '../../hooks/like';
import Header from '../../components/Header';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  fullPathBackgroundImage?: string;
  isLiked?: boolean;
}

const Movies: React.FC = () => {
  const { removeLike, likes } = useLike();

  return (
    <>
      <Header />
      <Container>
        <h3>My Favorites</h3>

        <ContentMovies>
          {likes.map((movie: Movie) => (
            <CardMovie key={movie.id}>
              <header>
                <img src={movie.fullPathBackgroundImage} alt={movie.title} />
              </header>
              <div>
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
              </div>
              <footer>
                <button type="button" onClick={() => removeLike(movie.id)}>
                  <FaHeart size="20" color="#AA3D32" />
                </button>
              </footer>
            </CardMovie>
          ))}
        </ContentMovies>
      </Container>
    </>
  );
};

export default Movies;
