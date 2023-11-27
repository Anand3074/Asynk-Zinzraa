// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import store from './Redux/store.js'
// // import { ThemeProvider } from '@material-tailwind/react'
// import App from './App.jsx'
// import './index.css'
// import { HashRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//   <HashRouter basename='/' >
//     {/* <ThemeProvider > */}
//     <App />
//     {/* </ThemeProvider> */}
//   </HashRouter>
//   </Provider>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import  { store, persistor } from './Redux/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);




