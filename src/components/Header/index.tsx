import React from 'react';

import { FiPlay, FiHeart } from 'react-icons/fi';
import { Container } from './styles';

const Header: React.FC = () => {
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
      <div>
        <button type="button">
          <FiHeart size="30" color="#AA3D3D" />
        </button>
      </div>
    </Container>
  );
};
export default Header;
