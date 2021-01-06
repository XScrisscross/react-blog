import Item from 'antd/lib/list/Item'
import React from 'react'

export default class BookIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookIndex: [
        {
          chapterId: '1',
          chapterIndex: '第一章',
          chapterName: 'xxxxxxxxxx',
        },
        {
          chapterId: '2',
          chapterIndex: '第一章',
          chapterName: 'xxxxxxxxxx',
        },
      ],
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="book-index-wraper">
        {this.state.bookIndex.map((item) => {
          return (
            <div className="chapter-item" key={item.chapterId}>
              <div className="chapter-index"> {item.chapterIndex} </div>
              <div className="chapter-name"> {item.chapterName} </div>
            </div>
          )
        })}
      </div>
    )
  }
}
