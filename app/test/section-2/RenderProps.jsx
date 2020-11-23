import React from 'react'

export default class Compt extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <MouseMove render={(data) => <Cat data={data} />} />
      </div>
    )
  }
}

class MouseMove extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
    }

    this.mousemoveHandle = this.mousemoveHandle.bind(this)
  }

  mousemoveHandle(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }} onMouseMove={this.mousemoveHandle}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class Cat extends React.Component {
  render() {
    console.log('++++params++++')
    console.log(this.props.data.x)
    console.log(this.props.data.y)
    console.log('----params----')
    return <div style={{ position: 'absolute', left: this.props.data.x, top: this.props.data.y }}>{this.props.data.x + '--' + this.props.data.y}</div>
  }
}
