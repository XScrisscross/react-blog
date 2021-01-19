import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import PageHeader from './PageHeader'

var FileSaver = require('file-saver')

import './BookContent.scss'

import ReactMarkdown from 'react-markdown'

import arr from '../../source/books'

console.log(1)

export default class BookContent extends React.Component {
  state = {
    value: '### 1 md ```function ``` <br>  123',
    bookName: 'react',
    bookAuthor: 'xs',
    demo: '',
  }

  componentDidMount() {}

  setValue() {
    this.setState({ value: this.state.value })
  }

  clickHnadle() {
    console.log('---')
    console.log(this.state.value)
    console.log('---')
    var blob = new Blob([this.state.demo], { type: 'text/plain;charset=utf-8' })
    FileSaver.saveAs(blob, 'hello world.txt')
  }

  render() {
    let html_string =  arr[2].chapterContent
    return (
      <div className="book-content-wraper">
        <div
          style={{ display: 'inline-block' }}
          dangerouslySetInnerHTML={{ __html: html_string }} >
        </div>

        <div onClick={this.clickHnadle}>
          <PageHeader {...this.state} />
        </div>

        {/* {this.state.demo} */}
        {/* <MDEditor value={this.state.value} onChange={this.setValue} /> */}
        <MDEditor.Markdown source={this.state.demo} />
        {/* <ReactMarkdown>{this.state.demo}</ReactMarkdown> */}
      </div>
    )
  }
}
