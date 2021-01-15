import { ADD_ITEM, DLE_ITEM, TO_HISTORY, SHOW_ALL, SHOW_HISTORY, SHOW_CURRENT } from './actions_types'

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    data: data,
  }
}

export const delItem = (data) => {
  return {
    type: DLE_ITEM,
    data: data,
  }
}

export const toHistory = (data) => {
  return {
    type: TO_HISTORY,
    data: data,
  }
}

export const showAll = (data) => {
  return {
    type: SHOW_ALL,
    data: data,
  }
}

export const showHistory = (data) => {
  return {
    type: SHOW_HISTORY,
    data: data,
  }
}

export const showCurrent = (data) => {
  return {
    type: SHOW_CURRENT,
    data: data,
  }
}
