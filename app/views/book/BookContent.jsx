import React from 'react'
import PageHeader from './PageHeader'

import './BookContent.scss'

import MD from '../../source/books/sectionD/1-搭建自己的(一).md'

export default class BookContent extends React.Component {
  render() {
    return (
      <div className="book-content-wraper">
        <div>
          <PageHeader />
        </div>
        <MD />
      </div>
    )
  }
}
