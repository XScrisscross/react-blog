import React from 'react'

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {}

  static getDerivedStateFromError(error) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('--shouldComponentUpdate--' + nextProps + nextState)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('--componentDidUpdate--' + prevProps + prevState + snapshot)
  }

  componentDidCatch(error, info) {}

  componentWillUnmount() {
    console.log('--componentWillUnmount--')
  }

  componentDidMount() {
    console.log('--componentDidMount--')
  }

  render() {
    return <div>LifeCycle</div>
  }
}
