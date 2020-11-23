import React from 'react'

import './Clock.scss'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
      // setState:状态叠加
      this.setState((state, props) => ({
        msg: this.props.name + this.state.date.toLocaleTimeString(),
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.props.name}</span>
          <span className="timer">{this.state.date.toLocaleTimeString()}</span>
        </div>
        <div>
          <span>{this.state.msg}</span>
        </div>
      </div>
    )
  }
}
