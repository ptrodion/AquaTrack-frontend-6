import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import 'assets/styles/styles.css';

// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
           <App />
        {/* </PersistGate>
      </Provider> */}
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
