import React from 'react'

// 1.dom 存储 ref
// 2.class 存储 ref
// 3.function 存储 ref X

// 转发

// 非受控组件

// 创建ref  标记到dom -> 可获取dom(ref.current)
// 创建ref  标记到class -> 可获取class实例(ref.current) -> 获取子组件数据
export default class Ref extends React.Component {
  constructor(props) {
    super(props)

    this.myRef = React.createRef()
    // this.myRef = React.createRef(ele=>{

    // })

    this.clickHnadle = this.clickHnadle.bind(this)
  }

  clickHnadle() {
    // console.log(this.myRef);
    // console.log(this.myRef.current);
    this.myRef.current.focus()
  }

  render() {
    return (
      <div>
        {/* <input type="text" name="" id="" ref={this.myRef} /> */}
        <input type="button" value="" onClick={this.clickHnadle} />
        <Test ref={this.myRef} />
      </div>
    )
  }
}

// function Test() {
//   return <input type="text"/>
// }

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // return React.forwardRef((props, ref) => <input type="text" name="" id="" ref={ref} />)

    return <input type="text" name="" id="" />
  }
}

// refs转发的作用 -- ref不可 直接越级 被传递
// 例
// function FButton() {
//   return (
//     <div>
//       <button>click</button>
//     </div>
//   )
// }

// class Compt extends React.Component {
//   render() {
//     return (
//       <div>
//         <FButton ref={ref}/>
//       </div>
//     )
//   }
// }

// const FButton = React.forwardRef((props, ref) => {
//   return (
//     <div>
//       <button ref={ref}>click</button>
//     </div>
//   )
// })

// const ref = React.createRef()
// <FancyButton ref={ref}>Click me!</FancyButton>

const excuHOC = (Component, fn) => {
  class Cpt extends React.Component {
    render() {
      return <Component ref={forwardedRef} />
    }
  }

  return React.forwardRef((props, ref) => {
    return <Cpt forwardedRef={ref} />
  })
}
