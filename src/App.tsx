import { Provider } from 'mobx-react';
import React from 'react';
import { MainProvider } from './contexts';
import { Routes } from './routes';
import stores from './stores';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <MainProvider>
        <Routes />
      </MainProvider>
    </Provider>
  );
};

export default App;
