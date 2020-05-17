import React, { createContext, useCallback, useState, useContext } from 'react';

// import { Container } from './styles';

interface LikeModalContext {
  show(stateModal: boolean): void;
  state: boolean;
}

const LikeModal = createContext<LikeModalContext>({} as LikeModalContext);

const LikeModalProvider: React.FC = ({ children }) => {
  const [likeModal, setLikeModal] = useState(false);

  const show = useCallback((stateModal: boolean) => {
    setLikeModal(stateModal);
  }, []);

  return (
    <LikeModal.Provider value={{ show, state: likeModal }}>
      {children}
    </LikeModal.Provider>
  );
};

function useLikeModal(): LikeModalContext {
  const context = useContext(LikeModal);

  if (!context) {
    throw Error('useLikeModal must be used within a LikeModalProvider');
  }
  return context;
}

export { LikeModalProvider, useLikeModal };
