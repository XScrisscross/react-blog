import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default (Comp) =>
  class extends React.Component {
    render() {
      console.log(this.props, 'RoutingGuard')
      return <Comp {...this.props} />
    }
  }
