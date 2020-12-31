import React from 'react'

import LifeCycle from './LifeCycle.jsx'
import ReactD from './ReactD.jsx'
import Hooks from './Hooks.jsx'

export default class Compt extends React.Component {
  render() {
    return (
      <div>
        <LifeCycle />
        <ReactD />
        <Hooks />
      </div>
    )
  }
}
