import React from 'react'

// 共享第一层级数据 创建context对象
// context 共享  可默认值  可用<Context.Provider value>包裹传值
// contex对象注入到组件 (component.contextType) 中  跨层级直接使用
const LeavelContext = React.createContext('默认值')

export default class Context extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '展示层级值',
    }

    this.excuFirstEvent = this.excuFirstEvent.bind(this)
  }

  excuFirstEvent(val) {
    this.setState({
      value: val,
    })
  }

  render() {
    return (
      <div>
        <LeavelContext.Provider value={this.state.value}>
          <div>
            <div>-展示</div>
            <Leavel1 firstEvent={this.excuFirstEvent}></Leavel1>
          </div>
        </LeavelContext.Provider>
        <Leavel1 />
      </div>
    )
  }
}

class Leavel1 extends React.Component {
  constructor(props) {
    super(props)

    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(value) {
    this.props.firstEvent(value)
  }

  render(){
    return (
      <div>
        <div>--第一层级</div>
        <Leavel2 secondEvent={this.changeHandle} />
      </div>
    )
  }
}

class Leavel2 extends React.Component {
  constructor(props) {
    super(props)

    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(value) {
    this.props.secondEvent(value)
  }

  render(){
    return (
      <div>
        <div>--第二层级</div>
        <Leavel3 thirdEvent={this.changeHandle} />
      </div>
    )
  }

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
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(e) {
    this.setState({
      value:e.target.value
    })
    this.props.thirdEvent(this.state.value)
  }

  render() {
    return (
      <div>
        <div>---第三层级</div>
        <div>context-{this.context}</div>
        <input value={this.state.value} type="text" onChange={this.changeHandle} />
      </div>
    )
  }
}

Leavel3.contextType = LeavelContext
