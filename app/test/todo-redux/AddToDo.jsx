import React from 'react'

export default class SwitchToDo extends React.Component {
  constructor(props) {
    super(props)

    this.addRef = React.createRef()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.addRef}/>
        <div onClick={()=>{ this.props.addItem({text:this.addRef.current.value}) }}>新增一条</div>
      </div>
    )
  }
}