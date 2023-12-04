import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import  { store, persistor } from './Redux/store.js';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider 
  // clientId="679005434641-jqnp6hd9erjeombqnsdrcflshf556in7.apps.googleusercontent.com" redirectUri="http://localhost:5173/">
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
  // </GoogleOAuthProvider>
);




