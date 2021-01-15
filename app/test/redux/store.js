import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

import { addItem, delItem, toHistory, showAll, showHistory, showCurrent } from '../redux/actions'

// let store = createStore(reducers)

// function dispatchAndLog(store, action) {
//   console.log('dispatching', action)
//   store.dispatch(action)
//   console.log('next state', store.getState())
// }

// function logger(store) {
//   let next = store.dispatch

//   // 我们之前的做法:
//   // store.dispatch = function dispatchAndLog(action) {

//   return function dispatchAndLog(action) {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }
// }

// store.dispatch(showHistory())
// dispatchAndLog(store, showCurrent())
// logger(store)(showHistory())

// console.log(logger(store)(showHistory()));

// --------------------
// function logger(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('dispatching', action)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
//     }
//   }
// }

// function logger1(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('1dispatching', action)
//       let result = next(action)
//       console.log('1next state', store.getState())
//       return result
//     }
//   }
// }

// function applyMiddleware(store, middlewares) {
//   middlewares = middlewares.slice()
//   middlewares.reverse()

//   let dispatch = store.dispatch
//   middlewares.forEach((middleware) => {
//     dispatch = middleware(store)(dispatch)
//   })

//   return Object.assign({}, store, { dispatch })
// }

// let obj = applyMiddleware(store, [logger, logger1])

// // console.log(obj.dispatch);
// console.log(obj.dispatch(showHistory()));
// // console.log(obj.dispatch(showCurrent()));
const loggerMiddleware = createLogger()

const myMiddleware = (store) => (next) => (action) => {
  console.log('myMiddleware-dispatching', action)
  let result = next(action)
  console.log('myMiddleware-next state', store.getState())
  return result
}

export default ((rootReducer, preloadedState, middlewares) => {
  return createStore(reducers, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware, ...middlewares))
})(reducers, {}, [myMiddleware])
