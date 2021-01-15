import { urls, jpurls, get, post, fpost } from '../http.js'

const BASE_PATH = ''

// listdemoA { parms1,params2 }
export const fetchListDemoA = (params) => get(`${BASE_PATH}?method=listdemoA`, params)

export const fetchListDemoA1 = (params) =>
  setTimeout(() => {
    return {
      data: {
        code: '200', 
        name: 'name',
      },
    }
  }, 2000)

export const fetchListDemoA2 = (params) =>
  setTimeout(() => {
    return {
      data: {
        code: '200',
      },
    }
  }, 2000)
