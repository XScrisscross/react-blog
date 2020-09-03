import React from 'react'

export default class Son extends React.Component {
  constructor(props) {
    super(props)

    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(e) {
    e.preventDefault()
    this.props.onTempChange(e.target.value, this.props.name)
  }

  render() {
    let name = this.props.name
    let temp = this.props.temp

    return (
      <div>
        <div>{name}</div>
        <input name="temp" type="text" value={temp} onChange={this.changeHandle} />
      </div>
    )
  }
}
