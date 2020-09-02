import React from 'react'
import ReactDOM from 'react-dom'

import App from '~views'
import Envs from '~envs'
import Tests from '~tests'
import Reducers from '~reducers'
import Router from '~router'
import Utils from '~utils'

ReactDOM.render(
  // element,
  // <App />,
  <Tests />,
  document.getElementById('root')
)
