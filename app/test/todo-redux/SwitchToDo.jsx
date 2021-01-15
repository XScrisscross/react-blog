import React from 'react'

export default class SwitchToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        <div onClick={this.props.showAll}>SHOW_ALL</div>
        <div onClick={this.props.showHistory}>SHOW_HISTORY</div>
        <div onClick={this.props.showCurrent}>SHOW_CURRENT</div>
      </ul>
    )
  }
}