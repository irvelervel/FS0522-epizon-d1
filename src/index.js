import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import store from './redux/store'
import { Provider } from 'react-redux'
// Provider is a React Component!
// it's NOT part of the general redux library, but rather from the bindings library
// it needs to be imported from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
// we're wrapping the entire application with Provider
