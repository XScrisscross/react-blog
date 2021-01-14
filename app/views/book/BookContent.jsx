import React from 'react'
import MDEditor from '@uiw/react-md-editor'

import './BookContent.scss'

import PageHeader from './PageHeader'

// import demo from './demo.md'
import demo from '../../books/index-demo/demo1.MD'

export default class BookContent extends React.Component {
  state = {
    value: '### 1 md ```function ``` <br>  123',
    bookName: 'react',
    bookAuthor: 'xs',
    demo: demo,
  }

  componentDidMount() {
    // var FileSaver = require('file-saver')
    // var blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' })
    // FileSaver.saveAs(blob, '~views/hello world.txt')
  }

  setValue() {
    this.setState({ value: this.state.value })
  }

  clickHnadle() {
    console.log(1)
  }

  render() {
    console.log(demo)
    return (
      <div className="book-content-wraper">
        <div onClick={this.clickHnadle}>
          <PageHeader {...this.state} />
        </div>
        <div className="content-main">
          {/* <MDEditor value={this.state.value} onChange={this.setValue} /> */}
          <MDEditor.Markdown source={this.state.demo} />
        </div>
      </div>
    )
  }
}
