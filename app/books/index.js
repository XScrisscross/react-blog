const files = require.context('./', true, /\.MD$/)
console.log(files);

files.keys().forEach((item) => {
  // const indexName = 'Utils_' + item.match(/\.\/index\-(\S*)\//)[1]
  const indexFn = files(item)

  console.log(item);
  console.log(indexFn);

  // import demo from item
  // console.log(demo);


  // if (JSON.stringify(window.indexName) === '{}') window[indexName] = {}
  // window[indexName] = { ...window[indexName], ...indexFn }
})
// import demo from './index-demo/demo1.MD'

// console.log(demo);