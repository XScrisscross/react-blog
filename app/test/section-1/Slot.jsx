import React from 'react'

export default class Slot extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <Test>
      //   <div>Welcome</div>
      // </Test>
      <Test1 left={<div>123</div>}  right={<div>456</div>} />
    )
  }
}

function Test(props) {
  return <div>{props.children}</div>
}

function Test1(props) {
  return (
  <div>
    <div>{props.left}</div>
    <div>{props.right}</div>
  </div>
  )
}
