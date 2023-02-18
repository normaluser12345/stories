import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import store from './store';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import FontStyles from './styles/FontStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontStyles />
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);