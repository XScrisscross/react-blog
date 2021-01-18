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
        <Row className="book-wraper-row">
          <Col span={5}>
            <BookIndex /> 
          </Col>
          <Col span={14}>
            <BookContent />
          </Col>
          <Col span={5}>
            <BookPendant />
          </Col>
        </Row>
      </div>
    )
  }
}
