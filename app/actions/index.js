const files = require.context('./', true, /(^\.\/types)([a-zA-Z\/\_]+)\.js$/)

// actions 指令集命名不可重复
const initActions = (files, actions = {}) => {
  files.keys().forEach((item) => {
    actions = { ...actions, ...files(item) }
  })
  return actions
}

// action 创建函数 payload:{ data }
const creatActionFn = (actions = {}, actionsFn = {}) => {
  for (const key in actions) {
    actionsFn[actions[key]] = (
      payload = {
        data: null,
      }
    ) => {
      const { data } = payload
      return {
        type: actions[key],
        data: data,
      }
    }
  }
  return actionsFn
}

export default Utils_Array.compose(initActions, creatActionFn)(files)
