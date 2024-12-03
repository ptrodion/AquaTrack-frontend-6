import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/styles.css';
import './components/LanguageSwitcher/i18n/i18n.js';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';

import { ModalProvider } from './context/ModalProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ModalProvider>
          <HelmetProvider>
          <App />
          </HelmetProvider>
          </ModalProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  /* </React.StrictMode> */
);
 