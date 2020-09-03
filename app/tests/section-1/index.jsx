import React from 'react'

import Clock from './Clock'
import Father from './Father'
import Toggle from './Toggle'
import Slot from './Slot'

const SectionOne = () => {
  return (
    <div>
      <Clock name="clock-time-1" />
      <Clock name="clock-time-2" />
      <Toggle />
      {/* 状态不共享 - 状态提升 - 传值*/}
      <Father />
      <Slot />
    </div>
  )
}

export default SectionOne
