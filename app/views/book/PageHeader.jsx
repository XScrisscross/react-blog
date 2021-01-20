import React from 'react'

// import './PageHeader.scss'

export default function PageHeader(props) {
  return (
    <div className="page-header-wraper">
      <div className="book-name">《 { props.bookName } 》</div>
      <div className="book-author">- { props.bookAuthor }</div>
    </div>
  )
} 
