import React from 'react'

// 共享第一层级数据
const LeavelContext = React.createContext()

export default class Context extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LeavelContext.Provider value={'展示层级值'}>
        <div>
          <div>-展示</div>
          <Leavel1></Leavel1>
        </div>
      </LeavelContext.Provider>
    )
  }
}

function Leavel1() {
  return (
    <div>
      <div>--第一层级</div>
      <Leavel2 />
    </div>
  )
}

function Leavel2() {
  return (
    <div>
      <div>--第二层级</div>
      <Leavel3 />
    </div>
  )
}

// class Leavel3 extends React.Component {
//   static contextType = LeavelContext

//   render() {
//     return (
//       <div>
//         <div>---第三层级</div>
//         <div>context-{this.context}</div>
//       </div>
//     )
//   }
// }

// 注入
class Leavel3 extends React.Component {
  render() {
    let theme = this.context

    return (
      <div>
        <div>---第三层级</div>
        <div>context-{theme}</div>
      </div>
    )
  }
}

Leavel3.contextType = LeavelContext
