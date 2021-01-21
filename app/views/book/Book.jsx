import React from 'react'

import BookSideBar from './BookSideBar'
import BookContent from './BookContent'

import './Book.scss'

export default class Book extends React.Component {
  render() {
    return (
      <>
        <div className="book-wraper">
          <BookContent />
          <BookSideBar />
        </div>
      </>
    )
  }
}
