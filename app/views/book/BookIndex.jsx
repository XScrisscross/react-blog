import Item from 'antd/lib/list/Item'
import React from 'react'
import { FileMarkdownTwoTone, FileExclamationTwoTone } from '@ant-design/icons'
import arr from '~books'

import './BookIndex.scss'

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
        <div className="book-index-edit">
        </div>
        <div className="book-index-list">
          <div className="chapter-title">索引</div>
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
