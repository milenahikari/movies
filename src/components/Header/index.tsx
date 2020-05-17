import React from 'react';

import { FiPlay, FiHeart, FiXCircle } from 'react-icons/fi';
import {
  Container,
  ContentNotification,
  Notifications,
  FavCard,
  Badge,
} from './styles';

import { useLike } from '../../hooks/like';
import { useLikeModal } from '../../hooks/likeModal';

const Header: React.FC = () => {
  const { likes, removeLike } = useLike();
  const { show, state } = useLikeModal();

  return (
    <Container>
      <div>
        <FiPlay size="40" color="#AA3D3D" />
        <p>Moovies</p>
      </div>
      <ul>
        <li>HOME</li>
        <li>FAVOURITES</li>
      </ul>

      <ContentNotification>
        <button type="button" onClick={() => show(!state)}>
          <FiHeart size="30" color="#AA3D3D" />
        </button>

        {likes.length > 0 && (
          <Badge>
            <span>{likes.length}</span>
          </Badge>
        )}

        {state && likes.length > 0 && (
          <Notifications>
            <section>
              <ul>
                {likes.map(movie => (
                  <FavCard key={movie.id}>
                    <img
                      src={movie.fullPathBackgroundImage}
                      alt={movie.title}
                    />
                    <p>{movie.title}</p>
                    <button type="button">
                      <FiXCircle
                        size="20"
                        color="#AA3D3D"
                        onClick={() => removeLike(movie.id)}
                      />
                    </button>
                  </FavCard>
                ))}
              </ul>
            </section>
          </Notifications>
        )}
      </ContentNotification>
    </Container>
  );
};
export default Header;
