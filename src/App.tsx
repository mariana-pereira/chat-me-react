import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import Routes from './routes';

import { store, persistor } from './store';
import history from './services/history';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
