export const saveObject = (key, obj) => {
  let str = JSON.stringify(obj)
  sessionStorage.setItem(key, str)
}

export const getObject = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}

export const saveLocalObject = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj))
}

export const getLocalObject = (key) => {
  return JSON.parse(localStorage.getItem(key))
}