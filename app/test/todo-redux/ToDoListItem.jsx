import React from 'react'

export default class ToDoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="list-item">
        <div>{this.props.text}</div>
        <div onClick={this.props.onDelItemClick}> 删除 </div>
        <div style={this.props.history ? { color: 'red' } : {}} onClick={this.props.onToHistoryClick}> 已阅 </div>
      </li>
    )
  }
}
