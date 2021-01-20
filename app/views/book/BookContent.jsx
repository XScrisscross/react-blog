import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import PageHeader from './PageHeader'

var FileSaver = require('file-saver')

import ReactMarkdown from 'react-markdown/with-html';
import md from '../../source/books/sectionD/1-搭建自己的(一).MD'

// import './BookContent.scss'


import arr from '../../source/books'

// console.log(1)
const marked = require('marked')

const articles = {
  '1': '/developer_guide.md',
  '2': '/user_manual.md'
}

const changeCurrentArticle = async (url) => {
  const res = await fetch('../../source/books/sectionD/1-搭建自己的(一).MD');
  console.log(1);
  console.log(res.text());
  console.log(1);
}
changeCurrentArticle()

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
    // console.log(haha);
    let html_string = marked(md)
    // html_string = html_string.replace('<p>','')
    console.log();
    // marked
    // console.log(html_string);
    return (
      <div className="book-content-wraper">
        {/* <div
          dangerouslySetInnerHTML={{ __html: html_string }} >
        </div> */}

        <div onClick={this.clickHnadle}>
          <PageHeader {...this.state} />
        </div>

        {/* {this.state.demo} */}
        {/* <MDEditor value={this.state.value} onChange={this.setValue} /> */}
        {/* <MDEditor.Markdown source={} /> */}
        <MDEditor.Markdown source={html_string} />
        {/* <ReactMarkdown>{html_string}</ReactMarkdown> */}
      </div>
    )
  }
}
