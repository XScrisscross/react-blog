import React from 'react'
import { Modal, Input, Form, Select } from 'antd'
import MDEditor from '@uiw/react-md-editor'
import { saveAs } from 'file-saver'
import config from '~env/config'

import './BookEdit.scss'

export default class BookEdit extends React.Component {
  constructor(props) {
    super(props)

    const blogType = config.blogType
    this.form = React.createRef()
    console.log(this.form);

    this.state = {
      // blog
      blog: '',
      blogName: '',
      blogType: blogType,

      // form
      form: '',
      validateMessages: {
        required: '${label} 不可为空!',
      },
    }
  }

  // state = {
  //   blogType: config.blogType,
  //   blog: '',
  //   blogName: '',

  //   // form: Form.useForm()[0],
  //   validateMessages: {
  //     required: '${label} 不可为空!',
  //   },
  // }

  onFinishFailed = (val) => {
    console.log(val)
  }

  valueChangeHandle = (blog) => {
    this.setState({
      blog: blog,
    })
  }

  fileSaveHandle = async () => {
    try {
      const values = await this.form.validateFields()
      console.log('Success:', values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
    // console.log(this.form.validateFields());
    // this.form.validateFields()
    // const blob = new Blob([this.state.blog], { type: 'text/plain;charset=utf-8' })
    // saveAs(blob, 'hello world.md')
  }

  render() {
    return (
      <>
        <Modal
          className={'book-edit-style'}
          title={'Book Edit'}
          width={'70%'}
          visible={this.props.visible}
          okText={'生成MD文档'}
          cancelText={'取消'}
          onOk={this.fileSaveHandle}
          onCancel={() => {
            this.props.onCancel()
          }}
        >
          <Form ref={this.form} className={'mb20'} layout={'inline'} initialValues={{ remember: false }} validateMessages={this.state.validateMessages}>
            <Form.Item style={{ width: 250 }} name="chapterName" label="标题" rules={[{ required: true }]}>
              <Input allowClear />
            </Form.Item>
            <Form.Item style={{ width: 250 }} name="RelaType" label="类型" rules={[{ required: true }]}>
              <Select placeholder="选择文章类型" allowClear>
                {this.state.blogType.map((item, index) => (
                  <Select.Option value={item.type} key={index}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
          <MDEditor height={500} className="md-editor" value={this.state.value} onChange={this.valueChangeHandle} />
        </Modal>
      </>
    )
  }
}
