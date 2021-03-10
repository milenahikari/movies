import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './styles/global';
import Home from './pages/Home';

import Routes from './routes/index';

import AppProvider from './hooks';

const src: React.FC = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
      <GlobalStyled />
    </>
  );
};

export default src;
