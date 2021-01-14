import React, { Suspense, lazy } from 'react'
import { Spin } from 'antd'

export default (importFunc) => {
  const Component = lazy(importFunc)

  return (props) => {
    console.log(props,'AsyncComponent');
    return (
      <Suspense fallback={<Spin tip="Loading..."> </Spin>}>
        <Component {...props} />
      </Suspense>
    )
  }
}
