import React from 'react'
import { FileAddTwoTone, FileExclamationTwoTone } from '@ant-design/icons'

export default class BookIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="book-index-wraper">
        <FileAddTwoTone />
        <FileExclamationTwoTone />
      </div>
    )
  }
}
