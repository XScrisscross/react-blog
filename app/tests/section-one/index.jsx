import React from 'react'

import Clock from './Clock'
import Toggle from './Toggle'

const SectionOne = () => {
  return (
    <div>
      <Clock name="clock-time-1"/>
      <Clock name="clock-time-2"/>
      <Toggle/>
    </div>
  )
}

export default SectionOne
