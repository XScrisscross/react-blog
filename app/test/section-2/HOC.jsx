import React from 'react'

// 原组件
// 组件嵌套
class Cpt extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>这是一个原生组件 + {this.props.cpt}</div>
  }
}

const HOCEXCU = (Component, fn) =>
  class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        common: 'common',
      }
    }

    componentDidMount() {}

    render() {
      return <Component cpt={this.state.common} {...this.props}></Component>
    }
  }

export default HOCEXCU(Cpt)
