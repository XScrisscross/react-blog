import React from 'react'

import { Row, Col } from 'antd'

import BookIndex from './BookIndex'
import BookContent from './BookContent'
import BookPendant from './BookPendant'

import './Book.scss'

export default class Book extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="book-wraper">
        <BookContent />
        <BookIndex />
      </div>
    )
  }
}
