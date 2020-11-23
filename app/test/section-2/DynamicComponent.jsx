import React from 'react'

function Compt(props) {
  return <div>this is component {props.val}</div>
}

export default class Dynamic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [1, 2, 3, 4],
    }
  }

  render() {
    return <div>{this.state.arr.map((ele) => <Compt val={ele} key={ele} />)}</div>
  }
}
