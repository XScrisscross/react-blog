// react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// main
import App from '~views'
import Test from '~test'
// import store from '~redux'

// mount-window
import '~apis'
import '~utils'
import '~env'

// gloable-css
import 'normalize.css/normalize.css'
import 'antd/dist/antd.css'
import '~assets/css/app.scss'

import './actions'

function RootApp() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <Test />
        </Route>
        <Route path="/app">
          <App />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<RootApp />, document.getElementById('root'))
