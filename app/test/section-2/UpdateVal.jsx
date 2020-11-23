import React from 'react'

// class Word extends React.Component {
//   // 1.react会在构造函数结束后，赋值this.props -> render中可调用 this.props
//   // 2.super(props) -> 在构造函数可使用this.props  super() -> 在构造函数中使用this

//   // 1.PureComponent 与 shouldComponentUpdate 不能共存
//   // constructor(props) {
//   //   super(props)
//   // }

//   // 2.必定会触发？x ->  props/state 发生改变 -> 实质上setState({})造成state的改变 -> 新对象
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(this.props, this.state)
//     console.log('-----')
//     console.log(nextProps, nextState)
//     // 在状态值改变的时候出发 -- 组件是否会重新渲染
//     return true
//   }

//   render() {
//     console.log('1111111')
//     return <div>{this.props.list.join(',')}</div>
//   }
// }

class Word extends React.PureComponent {
  render() {
    // console.log('1111111')
    return <div>{this.props.list.join(',')}</div>
  }
}

export default class UpdateBox extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      // flag: true,
      words: ['1'],
    }

    this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle() {
    // setState set新值  会触发生命周期
    // this.setState({
    //   // flag: !this.state.flag,
    //   // 简单数据类型
    //   flag: this.state.flag,
    // })

    // { words: this.state.words } = state  state发生改变  但是 state.word 无改变
    // 传值 state.word

    // const words = this.state.words
    // words.push('marklar')
    // this.setState({ words: words })

    this.setState({ words: [...this.state.words] })
  }

  // 深比较
  // 数据比较适合使用，控制ui的渲染 shouldComponentUpdate 必定会触发？
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state)
  //   console.log('++++++')
  //   console.log(nextProps, nextState)
  //   // 在状态值改变的时候出发 -- 组件是否会重新渲染
  //   return true
  // }

  render() {
    // console.log(222);
    let temp = ''
    if (this.state.flag) {
      temp = <div>view</div>
    }
    return (
      <div>
        <div onClick={this.clickHandle}>button</div>
        {/* {this.state.flag ? <div>view</div> : ''} */}
        {temp}
        <Word list={this.state.words} />
      </div>
    )
  }
}
