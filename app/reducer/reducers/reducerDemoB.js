import actions from '~actions'

const {
  actionsMap: { getListDemoB },
  actionsCreater,
} = actions

const initState = {}

export default [
  getListDemoB.reducer,
  (state = initState, action) => {
    const { type, payload } = action
    if (type === 'getListDemoB') {
      const { data } = payload
      return { ...state, data }
    }
    return state
  }
]
