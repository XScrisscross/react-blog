import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Code from '../../cpts/contain/CodeBlockHighLight'

import './PageMain.scss'

import arr from '../../../static/books'
const Hello = arr[0].chapterContent.default

export default class PageMain extends React.Component {
  render() {
    return (
      <div className="page-main-wraper">
        <Code>
          <Hello />
        </Code>
      </div>
    )
  }
}
