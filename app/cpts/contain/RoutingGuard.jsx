import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default (Comp) =>
  class extends React.Component {
    render() {
      // console.log(this.props, 'RoutingGuard')
      const { history, location } = this.props
      if (location.pathname === '/app/book') {
        return <Comp {...this.props} />
      } else {
        return <Redirect to="/app/book" />
      }
    }
  }
