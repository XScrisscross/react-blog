import React from 'react'

import PageHeader from './PageHeader'
import PageMain from './PageMain'
import PageFooter from './PageFooter'

import './BookContent.scss'

export default class BookContent extends React.Component {
  render() {
    return (
      <div className="book-content-wraper">
        <PageHeader />
        <PageMain />
        <PageFooter />
      </div>
    )
  }
}
