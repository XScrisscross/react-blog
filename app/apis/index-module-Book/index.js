import { urls, jpurls, get, post, fpost } from '../http.js'

const BASE_PATH = ''

// listdemoA { parms1,params2 }
export const FETCH_LIST_DEMOA = params => get(`${BASE_PATH}?method=listdemoA`, params)

