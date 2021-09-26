/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-09-26 21:32 (GMT+0900)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from '@/store'
import { Provider } from 'react-redux'
import '@/assets/scss/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
)
