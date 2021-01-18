import actions from '~actions'

const {
  actionsMap: { getListDemoA },
} = actions

const initState = {
  todoList: [1, 23],
}

export default [
  getListDemoA,
  (
    state = initState,
    payload = {
      data: null,
      promise: null,
      success: null,
      error: null,
    }
  ) => {
    const { data } = payload
    return { ...state, data }
  },
]
