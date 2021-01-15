import React from 'react'

import ToDoListItem from './ToDoListItem.jsx'

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props)

    // console.log(this.props);
  }

  render() {
    return (
      <ul>
        {
          this.props.todoList.map(item=> {
            return <ToDoListItem key={item.id} {...item} onDelItemClick={()=>{ this.props.delItem(item) }} onToHistoryClick={()=>{ this.props.toHistory(item) }} />  
          })
        }
      </ul>
    )
  }
}