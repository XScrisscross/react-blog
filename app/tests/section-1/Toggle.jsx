import React from 'react'

export default class Toggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: true,
      value: 'test',
      value1: 'test1',
      list: [1, 2, 3, 4, 5],
      current: 1,
    }

    this.clickHandle = this.clickHandle.bind(this)
    this.changeHandle = this.changeHandle.bind(this)
    this.selectChange = this.selectChange.bind(this)
  }

  clickHandle(e) {
    e.preventDefault()
    this.setState((state) => ({
      flag: !state.flag,
    }))
  }

  changeHandle(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  selectChange(e) {
    e.preventDefault()
    this.setState({
      current: e.target.value,
    })
  }

  render() {
    const eles = this.state.list.map((item,index) => <option value={item} key={index}>{item}</option>)

    return (
      <div>
        <button onClick={this.clickHandle}>{this.state.flag ? 'A' : 'B'}</button>
        <input name="value" type="text" value={this.state.value} onChange={this.changeHandle} />
        <input name="value1" type="text" value={this.state.value1} onChange={this.changeHandle} />
        <div>当前值{this.state.value}</div>
        <select value={this.state.current} onChange={this.selectChange}>{eles}</select>
        <div>当前select值{this.state.current}</div>
      </div>
    )
  }
}
