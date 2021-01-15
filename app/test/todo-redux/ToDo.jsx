import React from 'react'

import AddToDo from './AddToDo.jsx'
import SwitchToDo from './SwitchToDo.jsx'
import ToDoList from './ToDoList.jsx'

export default class ToDo extends React.Component {
  constructor(props) {
    super(props)

  }
  
  render() {
    // console.log('zaici');
    // console.log(this.props);
    return (
      <div>
        <AddToDo {...this.props}/>
        <SwitchToDo {...this.props}/>
        <ToDoList {...this.props}/>
      </div>
    )
  }
}
