### 地址

- `blog-publish`: < https://xs-demo-pro.vercel.app/#/app/book >
- `blog-source`: < https://github.com/XScrisscross/react-app-blog >

### 关于 React 的一些构建思路

- `require.context()`函数可以动态引入文件吗,一些`api`,`utlis`,全局`config`挂载到`window`,可以全局不引入直接使用
- 其他就是组件功能拆分,容器逻辑组件分离,结构分层分模块,主要看自己业务体量和代码怎么写的
- 一些其他的`router`,`redux`(目前原则是一个 `key` 对应一个 `action` 对应一个 `reducer`)
- 构建具体的在维护日志 < https://xs-demo-pro.vercel.app/#/app/book >,如有错误,欢迎指出!

### 动态引入

books

```js
import search from '../../README.MD'
import config from '~env/config'

const typeRelation = config.blogType.reduce((res, k) => {
  return { ...res, [k.type]: k.name }
}, {})

const files = require.context('./', true, /\.(MD|md)$/)

const fetchFilesInfo = (files, filesInfo = []) => {
  filesInfo.push({
    chapterId: '0',
    RelaType: 'INFO',
    typeName: '说明',
    chapterName: '维护日志',
    chapterContent: { default: search },
  })

  files.keys().forEach((file) => {
    const fileInfoArr = file.match(/\.\/mdBooks\/(\S*)\.(md|MD)/)[1].split('-')

    filesInfo.push({
      chapterId: fileInfoArr[0],
      RelaType: fileInfoArr[1],
      typeName: typeRelation[fileInfoArr[1]],
      chapterName: fileInfoArr[2],
      chapterContent: files(file),
    })
  })

  return filesInfo
}

export default Utils_Array.compose(Utils_Array.sortByFiled, Utils_Array.addActiveFirst)(fetchFilesInfo(files), 'chapterId')
```

actions

```js
const files = require.context('./', true, /(^\.\/types)([a-zA-Z\/\_]+)\.js$/)

// actions 指令集命名不可重复
const initActions = (files, actions = {}) => {
  files.keys().forEach((item) => {
    actions = { ...actions, ...files(item).default }
  })
  return actions
}

// action 创建函数 payload:{ data }
const creatActionFn = (actions = {}, actionsFn = {}) => {
  for (const actionInfo in actions) {
    const { key, action, reducer } = actions[actionInfo]
    actionsFn[action] = (payload) => {
      const { data, promise, success, error } = payload
      return {
        type: key,
        payload: {
          data,
          promise,
          success,
          error,
        },
      }
    }
  }
  return {
    actionsMap: actions,
    actionsCreater: actionsFn,
  }
}

// actionsMap:key列表
// actionsCreater:key-action列表
export const { actionsMap, actionsCreater } = Utils_Array.compose(initActions, creatActionFn)(files)
```

reducer

```js
import { combineReducers } from 'redux'

const files = require.context('./', true, /(^\.\/reducers)([a-zA-Z\/\_]+)\.js$/)

const initReducersMap = (files, reducers = []) => {
  return files.keys().reduce((res, k) => {
    return files(k).default ? [...res, files(k).default] : res
  }, reducers)
}

const createReducer = (initReducersMap = [], reducers = {}) => {
  for (const [key, reducer] of initReducersMap) {
    reducers[key] = reducer
  }
  return reducers
}

export default Utils_Array.compose(initReducersMap, createReducer, combineReducers)(files)
```

middleware

```js
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '~reducer'

const loggerMiddleware = createLogger()

const files = require.context('./', true, /(^\.\/middlewares)([a-zA-Z\/\_]+)\.js$/)

const initmMiddlewares = (files, middlewares = []) => {
  return files.keys().reduce((res, k) => {
    return files(k).default ? res.concat(files(k).default) : res
  }, middlewares)
}

export default ((rootReducer, preloadedState, middlewares) => {
  return createStore(reducers, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware, ...middlewares))
})(reducers, {}, initmMiddlewares(files))
```

compose

```js
// compose 实现
// fns:[] 事件序列  source:源数据
// 方案一 递归
// export const compose = (...fns) => (source) => {
//   const fnf = fns.shift()
//   if (fnf) {
//     return compose(...fns)(fnf(source))
//   }
//   return source
// }
// 方案二 reduce
export const compose = (...fns) => (source) => {
  return fns.reduce((res, cur) => {
    return cur(res)
  }, source)
}
```

---

- 如有问题,欢迎指出!
