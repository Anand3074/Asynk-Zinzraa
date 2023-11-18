import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { ThemeProvider } from '@material-tailwind/react'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <HashRouter basename='/' >
    <ThemeProvider >
    <App />
    </ThemeProvider>
  </HashRouter>
  </Provider>
)




