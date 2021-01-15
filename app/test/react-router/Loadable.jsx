import loadable from '@loadable/component'
import React from 'react'

// import Loading from "./Loading.js";

// loadable 动态加载
const LoadableComponent = loadable(
  new Promise((resolve) => setTimeout(resolve, 2000)).then((res) => {
    () => import('../section-1/Father')
  }),
  {
    fallback: <div>1212</div>,
  }
)

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />
  }
}
