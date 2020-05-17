import React, { createContext, useCallback, useContext, useState } from 'react';

// import { Container } from './styles';

interface LikeContextData {
  addLike(movie: LikeMovie): void;
  removeLike(id: number): void;
  likes: LikeMovie[];
}

interface LikeMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  fullPathBackgroundImage?: string;
}

const Like = createContext<LikeContextData>({} as LikeContextData);

const LikeProvider: React.FC = ({ children }) => {
  const [likeMovies, setLikeMovies] = useState<LikeMovie[]>(() => {
    const moviesLiked = localStorage.getItem('@Moovies:likeMovies');

    if (moviesLiked) {
      return JSON.parse(moviesLiked);
    }

    return [];
  });

  const addLike = useCallback(
    ({
      id,
      title,
      poster_path,
      overview,
      fullPathBackgroundImage,
    }: LikeMovie) => {
      const formatedMovie = {
        id,
        title,
        poster_path,
        overview,
        fullPathBackgroundImage,
      };

      const likedMovies = [...likeMovies, formatedMovie];

      setLikeMovies(likedMovies);

      localStorage.setItem('@Moovies:likeMovies', JSON.stringify(likedMovies));
    },
    [likeMovies],
  );

  const removeLike = useCallback(
    (id: number) => {
      const listMovies = likeMovies.filter(movie => movie.id !== id);
      setLikeMovies(listMovies);
      localStorage.setItem('@Moovies:likeMovies', JSON.stringify(listMovies));
    },
    [likeMovies],
  );

  return (
    <Like.Provider value={{ addLike, removeLike, likes: likeMovies }}>
      {children}
    </Like.Provider>
  );
};

function useLike(): LikeContextData {
  const context = useContext(Like);

  if (!context) {
    throw Error('useLike must be used within a LikeProvider');
  }
  return context;
}

export { LikeProvider, useLike };
