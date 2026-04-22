import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from './app/store';
/*component that delays rendering the app until saved state
has been fully loaded from session storage into redux,
which waits till the rehydration is done*/
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)