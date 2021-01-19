import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import { connect } from 'react-redux'
import actions from '~actions'

import './BookContent.scss'

import PageHeader from './PageHeader'

// import demo from './demo.md'
import demo from '../../books/index-demo/demo1.MD'

class BookContent extends React.Component {
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

  clickHnadle() {}

  render() {
    // console.log(this.props)
    // this.props.addItem({ data: [1, 23] })
    // console.log(this.props)
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

const mapStateToProps = (state, ownProps) => {
  return {
    todoList: state,
  }
}

const { actionsMap, actionsCreater } = actions
const { getListDemoAAction } = actionsCreater

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (data) => {
      dispatch(getListDemoAAction(data))
    },
    delItem: (data) => {
      dispatch(delItem(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContent)
