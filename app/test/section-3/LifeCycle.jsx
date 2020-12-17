import React from 'react'

export default class LifeCycle extends React.Component {
  // 创建挂载时调用
  // constructor() 在 constructor() 函数中不要调用 setState() 方法
  // static getDerivedStateFromProps()
  // render()
  // componentDidMount()

  // 更新时调用
  // static getDerivedStateFromProps()
  // shouldComponentUpdate(nextProps, nextState)  如果 shouldComponentUpdate() 返回 false，则不会调用 render()。 不会调用 componentDidUpdate()。 forceUpdate() 时不会调用该方法。  返回 false 并不会阻止子组件在 state 更改时重新渲染。  不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()
  // render()
  // getSnapshotBeforeUpdate()
  // componentDidUpdate(prevProps, prevState, snapshot)

  // 卸载时调用
  // componentWillUnmount()  清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。 不应调用 setState()

  // 错误时调用
  // static getDerivedStateFromError()
  // componentDidCatch()

  // 其他 APIs
  // setState() setState() 并不总是立即更新组件 componentDidUpdate 或者 setState 的回调函数（setState(updater, callback)）
  // forceUpdate()

  // class 属性
  // defaultProps
  // displayName

  // 实例属性
  // props
  // state

  // render
  // 返回值支持的类型 ：
  //   React 元素 
  // 数组或 fragments。 
  // Portals。 
  // 字符串或数值类型。 
  // 布尔类型或 null。 
  constructor(props) {
    super(props)

    this.state = {}

    console.log('mount' + 1)
  }

  static getDerivedStateFromProps(props, state) {
    console.log('mount' + 2)
    return state
  }

  static getDerivedStateFromError(error) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('--shouldComponentUpdate--' + nextProps + nextState)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('--componentDidUpdate--' + prevProps + prevState + snapshot)
  }

  componentDidCatch(error, info) {}

  componentWillUnmount() {
    console.log('--componentWillUnmount--')
  }

  componentDidMount() {
    console.log('mount' + 4)
    console.log('--componentDidMount--')
  }

  render() {
    console.log('mount' + 3)
    return <div>LifeCycle</div>
  }
}
