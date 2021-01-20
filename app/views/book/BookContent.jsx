import React from 'react'
import PageHeader from './PageHeader'
import { MDXProvider } from '@mdx-js/react'
import Code from '../../cpts/contain/CodeBlockHighLight'

import './BookContent.scss'

import arr from '../../source/books'
const Hello = arr[0].chapterContent.default

export default class BookContent extends React.Component {
  render() {
    return (
      <div className="book-content-wraper">
        <>
          <PageHeader />
        </>

        {/* <Hello components={components} /> */}

        <Code><Hello /></ Code>
      </div>
    )
  }
}
