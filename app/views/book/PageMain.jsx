import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from '~contain/CodeBlockHighLight'
import mdBooks from '~books'

import './PageMain.scss'

const Hello = mdBooks[0].chapterContent

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
