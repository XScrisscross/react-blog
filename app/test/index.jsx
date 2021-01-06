import React from 'react'

import SectionOne from '~test/section-1'
import SectionTwo from '~test/section-2'
import SectionThree from '~test/section-3'
import TodoReact from '~test/todo-redux/ToDoContainer.js'
import ReacrRouter from '~test/react-router/index'

import './redux/store.js'

const Test = () => {
  return (
    <div id="index">
      {/* <SectionOne /> */}
      {/* <SectionTwo /> */}
      {/* <SectionThree /> */}
      <TodoReact />
      {/* <ReacrRouter /> */}
    </div>
  )
}

export default Test
