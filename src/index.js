import './components/_settings/_base.scss'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import initStore from './store'

const store = initStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
