import actions from '~actions'

const {
  actionsMap: { getListDemoA },
  actionsCreater,
} = actions

const initState = {
  todoList: [1, 2],
}

export default [
  getListDemoA.reducer,
  (state = initState, action) => {
    const { type, payload } = action
    if (type === 'getListDemoA') {
      const { data } = payload
      return { ...state, data }
    }
    return state
  }
]
