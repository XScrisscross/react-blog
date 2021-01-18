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
    actionsFn[action] = (
      payload = {
        data: null,
        promise: null,
        success: null,
        error: null,
      }
    ) => {
      const { data, promise, success, error } = payload
      return {
        key,
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

export default Utils_Array.compose(initActions, creatActionFn)(files)
