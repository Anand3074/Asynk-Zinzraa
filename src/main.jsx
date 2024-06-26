import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import  { store, persistor } from './Redux/store.js';
import ScrollToTop from './Components/Layout/ScrollOnTop.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App1.jsx';
import './index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

// Initialize AOS once the application starts
AOS.init({
  duration: 3000,
  once: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider 
  // clientId="679005434641-jqnp6hd9erjeombqnsdrcflshf556in7.apps.googleusercontent.com" redirectUri="http://localhost:5173/">
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename='/'>
      <ThemeProvider>
      <ScrollToTop />
        <App />
      </ThemeProvider>
      </HashRouter>
    </PersistGate>
  </Provider>
  // </GoogleOAuthProvider>
);




