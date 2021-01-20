import Item from 'antd/lib/list/Item'
import React from 'react'
import { FileMarkdownTwoTone, FileExclamationTwoTone } from '@ant-design/icons'
import arr from '~books'

// import './BookIndex.scss'

// console.log('---')
// console.log(arr)
// var resolve = require('resolve');
// resolve('tap', { basedir: '../../source/books/sectionD/1-搭建自己的(一).MD' }, function (err, res) {
//     if (err) console.error(err);
//     else console.log(res);
// });

export default class BookIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookIndex: arr,
      // demo: demo,
    }
  }

  componentDidMount() {}

  render() {
    // console.log(demo);
    return (
      <div className="book-sidebar">
        <div className="book-index-edit">
        </div>
        <div className="book-index-list">
          <div className="chapter-title">索引</div>
          {this.state.bookIndex.map((item, index) => {
            return (
              <div className={index === 0 ? 'chapter-item active' : 'chapter-item'} key={item.typeRela + item.chapterId}>
                {/* <FileMarkdownTwoTone  className="mr10" /> */}
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
