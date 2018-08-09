import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import RandomContainer from './container/Random';

const App = () =>
  <Provider store={store}>
    <RandomContainer/>
  </Provider>

export default App;
