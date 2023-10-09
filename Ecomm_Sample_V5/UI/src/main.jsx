import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/css/Style.css'
import './assets/css/Colors.css'
import './assets/css/Layout.css'
import './assets/css/404.css'
import './assets/css/Addon.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
