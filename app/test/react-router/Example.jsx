import React from 'react'
import { HashRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
            <li>
              {/* <Link to="/users">Users</Link>
               */}
              {/* <Link
                to={{
                  pathname: '/users',
                  search: '?sort=name',
                  hash: '#the-hash',
                  state: { fromDashboard: true },
                }}
              >Users</Link> */}
              {/* <Link  replace to={(location) => `${location.pathname}?sort=name`}>Users + {location.pathname}</Link> */}
              {/* <Link  to={(location) => `${location.pathname}?sort=name`}>Users + {location.pathname}</Link> */}
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:params" exact>
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  let { params } = useParams()
  return <h2>Users + {params}</h2>
}
