import { connect } from 'react-redux'

import { SHOW_HISTORY, SHOW_ALL, SHOW_CURRENT } from '../redux/actions_types'
import { addItem, delItem, toHistory, showAll, showHistory, showCurrent } from '../redux/actions'

import ToDo from './ToDo.jsx'

const filterList = (todoList, filter) => {
  switch (filter) {
    case SHOW_HISTORY:
      return todoList.filter((item) => item.history === true)
    case SHOW_CURRENT:
      return todoList.filter((item) => item.history === false)
    case SHOW_ALL:
      return todoList
    default:
      return todoList
  }
  return
}

// 创建map函数
const mapStateToProps = (state, ownProps) => {
  return {
    todoList: filterList(state.ctrlsReducers.todoList, state.showReducers.visible || ownProps.visible),
  }
}

// dispatch
// function dispatchAndLog(store, action) {
//   console.log('dispatching', action)
//   store.dispatch(action)
//   console.log('next state', store.getState())
// }

// 创建map函数
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (data) => {
      dispatch(addItem(data))
    },
    delItem: (data) => {
      dispatch(delItem(data))
    },
    toHistory: (data) => {
      dispatch(toHistory(data))
    },
    showAll: () => {
      dispatch(showAll())
    },
    showHistory: () => {
      dispatch(showHistory())
    },
    showCurrent: () => {
      dispatch(showCurrent())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
