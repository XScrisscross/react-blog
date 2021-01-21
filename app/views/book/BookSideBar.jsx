import Item from 'antd/lib/list/Item'
import React from 'react'
import { PlusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import arr from '~books'

import './BookSideBar.scss'

export default class BookIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookIndex: arr,
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="book-sidebar">
        <div className="chapter-title shadow">
          <PlusCircleOutlined className="icon mr10"/>
          <ExclamationCircleOutlined className="icon"/>
        </div>
        <div className="book-index-list shadow">
          {this.state.bookIndex.map((item, index) => {
            return (
              <div className={index === 0 ? 'chapter-item active' : 'chapter-item'} key={item.typeRela + item.chapterId}>
                <div className="chapter-name ">
                  {index + 1} . {item.chapterName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
