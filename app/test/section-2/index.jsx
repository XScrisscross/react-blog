import React, { lazy, Suspense } from 'react'
import MyErrorBoundary from './MyErrorBoundary'
import Context from './Context'
import Ref from './Ref'
import Fragments from './Fragments'
import HOC from './HOC'
import DynamicComponent from './DynamicComponent'
import UpdateVal from './UpdateVal'
import PureCompt from './PureCompt'
import RenderProps from './RenderProps'

// const Lazy = React.lazy(() => import('./Lazy'))
const Lazy = lazy(() => import('./Lazy'))

export default class SectionTwo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* <MyErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Lazy />
          </Suspense>
        </MyErrorBoundary>
        <Context></Context>
        <Ref />
        <Fragments />
        <HOC />
        <DynamicComponent />
        <UpdateVal />
        <PureCompt data={'ceshi'} />
        <RenderProps /> */}
      </div>
    )
  }
}
