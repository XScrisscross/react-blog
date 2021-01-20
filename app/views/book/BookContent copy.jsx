import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import PageHeader from './PageHeader'
import { lazy, Component, Suspense } from 'react'
import { importMDX } from 'mdx.macro'

// var FileSaver = require('file-saver')

// const Content = lazy(() => importMDX('../../source/books/sectionD/1-搭建自己的(一).mdx'))

export default class BookContent extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    )
  }
}

// import ReactMarkdown from 'react-markdown/with-html';
import MD from '../../source/books/sectionD/1-搭建自己的(一).mdx'

// import './BookContent.scss'

// import arr from '../../source/books'

// const marked = require('marked')

export default class BookContent extends React.Component {
  state = {
    demo: '',
  }


  render() {
    console.log(MD);
    // let html_string = marked(md)
    return (
      <div className="book-content-wraper">
        {/* <div
          dangerouslySetInnerHTML={{ __html: html_string }} >
        </div> */}

        <div>
          <PageHeader {...this.state} />
        </div>

        {/* {this.state.demo} */}
        {/* <MDEditor value={this.state.value} onChange={this.setValue} /> */}
        {/* <MDEditor.Markdown source={} /> */}
        <MDEditor.Markdown source={MD} />
        {/* <ReactMarkdown> */}
          {/* <MD /> */}
        {/* </ReactMarkdown> */}
          <MD />
      </div>
    )
  }
}
