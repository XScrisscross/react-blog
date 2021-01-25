### 地址

- `blog-publish`: < https://xscrisscross.vercel.app/#/app/book >
- `blog-source`: < https://github.com/XScrisscross/react-app-blog >

### 代码块高亮

CodeBlock.js

```jsx
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github' // 这个可以自定义主题
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '')

  if (live) {
    return (
      <div style={{ marginTop: '40px', backgroundColor: 'black' }}>
        <LiveProvider code={children.trim()} transformCode={(code) => '/** @jsx mdx */' + code} scope={{ mdx }}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
```

CodeBlockHighLight.js

```jsx
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Container, baseStyles } from 'unified-ui'

import CodeBlock from './CodeBlock'

const Style = ({ children }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
)

const components = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => <div style={{ backgroundColor: '#d3dcbc' }} {...props} />,
  code: CodeBlock,
}

export default (props) => (
  <MDXProvider components={components}>
    <>
      <Style>{baseStyles}</Style>
      <Container {...props} />
    </>
  </MDXProvider>
)
```

### 其他

- 主要的功能就是展示以及在线编辑处理文档(主要是定义命名规则)
- 可以使用 `mdx` 语法,写一个`md`文档内容在线上保存处理后,放到文件夹`mdBooks`下即可
- 一些细节可以看 < https://github.com/XScrisscross/react-app-blog > ,以及` blog` 维护日志 < https://xscrisscross.vercel.app/#/app/book >

### 发布

- 可以在`GitPage`上发布,建议`vercel`,不用安装,关联 `gihub` 后推代码就行

---

- 如有问题,欢迎指出!
