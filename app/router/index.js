const files = require.context('./', true, /(^\.\/index\-module\-)([a-zA-Z\/]+)\.js$/)

let routes = []

// apis 分模块挂载到window
files.keys().forEach((item) => {
  console.log(files(item).default)
  routes = [...routes, files(item).default]
  // routes.concat(files(item).default)
})

console.log(routes)

export default routes.map((item) => {})
