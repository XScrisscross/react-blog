import React from 'react'

import BookIndex from './BookIndex'
import BookContent from './BookContent'

export default class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className="book-wraper">
        <BookIndex />
        <BookContent />
      </div>
    )
  }
}
