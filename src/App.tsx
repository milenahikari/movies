import React from 'react';
import GlobalStyled from './styles/global';
import Home from './pages/Home';

import AppProvider from './hooks';

const src: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyled />
    </>
  );
};

export default src;
