import React from 'react'

import Son from './Son'

export default class Father extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: '',
      type: 'son1',
    }

    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(value, name) {
    this.setState({ temp: value, type: name })
  }

  render() {
    let val1 = this.state.type === 'son1' ? this.state.temp : this.state.temp / 10
    let val2 = this.state.type === 'son2' ? this.state.temp : this.state.temp * 10
    return (
      <div>
        <Son temp={val1} name="son1" onTempChange={this.changeHandle} />
        <Son temp={val2} name="son2" onTempChange={this.changeHandle} />
      </div>
    )
  }
}
