import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '@redux/configureStore'
import AppRouters from '@routers/AppRouters'

import './styles/styles.scss'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouters />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector("#root"))