import React from 'react'
import MDEditor from '@uiw/react-md-editor'

import './BookContent.scss'

import PageHeader from './PageHeader'

export default class BookContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value:'### 1 md ```function ``` <br>  123',
      bookName:'react',
      bookAuthor:'xs',
    }

    this.setValue = this.setValue.bind(this)
  }

  componentDidMount() {}

  setValue(){
    this.setState({value:this.state.value})
  }

  render() {
    return (
      <div className="book-content-wraper">
        <div>
          <PageHeader {...this.state}/>
        </div>
        <div className="content-main">
          {/* <MDEditor value={this.state.value} onChange={this.setValue} /> */}
          <MDEditor.Markdown source={this.state.value} />
        </div>
      </div>
    )
  }
}
