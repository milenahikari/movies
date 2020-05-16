import React, { useEffect, useState } from 'react';

import { FiHeart } from 'react-icons/fi';
import { Container, ContentMovies, CarMovie } from './styles';

import api, { API_KEY, PATH_IMAGE } from '../../services/api';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  fullPathBackgroundImage?: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies(): Promise<void> {
      const response = await api.get(
        `/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`,
      );

      const { results } = response.data;

      const resultWithFullPath = results.map((movie: Movie) => ({
        ...movie,
        fullPathBackgroundImage: `${PATH_IMAGE}/${movie.poster_path}`,
      }));
      setMovies(resultWithFullPath);
    }

    getMovies();
  }, []);

  return (
    <Container>
      <h3>More Movies</h3>

      <ContentMovies>
        {movies.map((movie: Movie) => (
          <CarMovie key={movie.id}>
            <header>
              <img src={movie.fullPathBackgroundImage} alt={movie.title} />
            </header>
            <div>
              <h4>{movie.title}</h4>
              <p>{movie.overview}</p>
            </div>
            <footer>
              <button type="button">
                <FiHeart size="20" color="#AA3D32" />
              </button>
            </footer>
          </CarMovie>
        ))}
      </ContentMovies>
    </Container>
  );
};

export default Movies;
