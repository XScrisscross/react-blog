import Item from 'antd/lib/list/Item'
import React from 'react'
import { PlusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import './BookSideBar.scss'

export default class BookSideBar extends React.Component {
  render() {
    return (
      <div className="book-sidebar">
        <div className="chapter-title shadow">
          <PlusCircleOutlined className="icon mr10" />
          <ExclamationCircleOutlined className="icon" />
        </div>
        <div className="book-index-list shadow">
          {this.props.mdBooks.map((item, index) => {
            return (
              <div className={index === 0 ? 'chapter-item active' : 'chapter-item'} key={item.typeRela + item.chapterId}>
                <div className="chapter-name ">
                  {index === 0 ? '' : index + '.'} {item.chapterName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
