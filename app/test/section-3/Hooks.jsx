// import React, { useEffect, useState } from 'react'

// export default function () {
//   const [count, setCount] = useState(2)

//   const clickHnadle = () => {
//     setCount(count++)
//   }

//   useEffect(() => {
//     // 使用浏览器的 API 更新页面标题
//     console.log(1)
//   })

//   console.log(2)
//   return <div onClick={clickHnadle}>{count}</div>
// }

import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
  })

  const clickHnadle = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickHnadle}>Click me</button>
    </div>
  )
}
