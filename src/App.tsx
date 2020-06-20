import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';

import store from './store';
import history from './services/history';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  </Provider>
);

export default App;
