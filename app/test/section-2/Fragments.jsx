import React from 'react'

// Fragments 组的概念

export default class Fragments extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [1, 2, 3, 4],
    }
  }

  render() {
    return (
      <div>
        {this.state.arr.map((item) => (
          <React.Fragment key={item}>
            <ChildA />
            <ChildB />
          </React.Fragment>
        ))}
      </div>
    )
  }
}

function ChildA() {
  return <div>ChildA</div>
}

function ChildB() {
  return <div>ChildB</div>
}
