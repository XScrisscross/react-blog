import { urls, jpurls, get, post, fpost } from './http.js'

const BASE_PATH = ''

// download-file
export const DOWNLOAD_FILE = params => get(`${BASE_PATH}?method=downloadfile`, params)

// upload-file
export const UPLOAD_FILE = params => get(`${BASE_PATH}?method=uploadfile`, params)

// delete-file
export const DELETE_FILE = params => get(`${BASE_PATH}?method=deletefile`, params)