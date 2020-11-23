import React, { Profiler } from 'react'

export default class Compt extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      arr: ['1'],
    }

    // this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle = () => {
    // this.setState({ arr: this.state.arr })
    // this.setState({ arr: [...this.state.arr] })

    let { arr } = this.state
    arr.push('2')
    this.setState({ arr })
  }

  // shouldComponentUpdate(nextProps, nextStates) {
  //   console.log('Compt-shouldComponentUpdate')
  //   return true
  // }
  onRenderCallback(
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) {
    // 合计或记录渲染时间。。。
    console.log(id + '----发生提交的 Profiler 树的 “id”')
    console.log(phase + '----"mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一')
    console.log(actualDuration + '----本次更新 committed 花费的渲染时间')
    console.log(baseDuration + '----估计不使用 memoization 的情况下渲染整颗子树需要的时间')
    console.log(startTime + '----本次更新中 React 开始渲染的时间')
    console.log(commitTime + '----本次更新中 React committed 的时间')
    console.log(interactions + '----属于本次更新的 interactions 的集合')
  }

  render() {
    console.log('Compt-render')
    return (
      <div>
        <div onClick={this.clickHandle}>button</div>
        <Profiler id="child" onRender={this.onRenderCallback}>
          <Child {...this.state} {...this.props} />
        </Profiler>
      </div>
    )
  }
}

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextStates) {
    console.log('Child-shouldComponentUpdate')
    return true
  }

  render() {
    console.log('Child-render')
    return <div></div>
  }
}
