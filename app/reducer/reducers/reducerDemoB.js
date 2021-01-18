import actions from '~actions'

const {
  actionsMap: { getListDemoB },
  actionsCreater,
} = actions

const initState = {}

export default [
  getListDemoB,
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
