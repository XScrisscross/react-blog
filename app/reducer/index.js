import { combineReducers } from 'redux'

const files = require.context('./', true, /(^\.\/reducers)([a-zA-Z\/\_]+)\.js$/)

const initReducersMap = (files, reducers = []) => {
  return files.keys().reduce((res, k) => {
    return [...res, files(k).default]
  }, reducers)
}

const createReducer = (initReducersMap = [], reducers = {}) => {
  for (const [type, reducer] of initReducersMap) {
    reducers[type.reducer] = reducer
  }
  return reducers
}

export default Utils_Array.compose(initReducersMap, createReducer, combineReducers)(files)
