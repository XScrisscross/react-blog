import React from 'react'

import BookIndex from './BookIndex'
import BookContent from './BookContent'
import BookPendant from './BookPendant'

import './Book.scss'

export default class Book extends React.Component {
  render() {
    return (
      <>
        <div className="book-wraper">
          <BookContent />
          <BookIndex />
        </div>
      </>
    )
  }
}
