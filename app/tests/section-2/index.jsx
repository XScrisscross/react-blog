import React, { lazy, Suspense } from 'react'
import MyErrorBoundary from './MyErrorBoundary'
import Context from './Context'

// const Lazy = React.lazy(() => import('./Lazy'))
const Lazy = lazy(() => import('./Lazy'))

export default class SectionTwo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Lazy />
          </Suspense>
        </MyErrorBoundary>
        <Context></Context>
      </div>
    )
  }
}
