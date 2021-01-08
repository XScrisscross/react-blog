import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '~views'
import Env from '~env'
import Test from '~test'
import store from '~test/redux/store'
import Reducers from '~reducers'
import Router from '~router'
import Utils from '~utils'

import 'antd/dist/antd.css'
import './assets/css/app.scss'

import './books'

ReactDOM.render(
  // element,
  <App />,
  // <Provider store={store}>
  //   <Test />
  // </Provider>,
  document.getElementById('root')
)
