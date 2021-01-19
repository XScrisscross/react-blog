const files = require.context('./', true, /\.(MD|md)$/)
// console.log(files)

// const analyzeMDS = (files,bookInfo) => {
//   files.keys().forEach((k) => {
//     const indexFn = files(item)
//   })
// }

let relation = {
  sectionC: '其他1',
  sectionD: '其他',
}

let arr = []

files.keys().forEach((item) => {
  // const indexName = item.match(/\.\/index\-(\S*)\//)[1]
  const chapterContent = files(item)
  let obj = {}
  const infoArr = item.split('/')
  let typeName = relation[infoArr[1]]
  let typeRela = infoArr[1]
  let chapterId = infoArr[2].split('-')[0]
  let chapterName = infoArr[2].split('-')[1].split('.')[0]
  // console.log(type)
  // console.log(index)
  // console.log(name)
  obj = {
    typeRela,
    typeName,
    chapterId,
    chapterName,
    chapterContent
  }
  arr.push(obj)
  // console.log(arr)
  // console.log(indexFn);
  // console.log(indexName);

  // import demo from item
  // console.log(demo);

  // if (JSON.stringify(window.indexName) === '{}') window[indexName] = {}
  // window[indexName] = { ...window[indexName], ...indexFn }
})
// import demo from './index-demo/demo1.MD'

// console.log(demo);

export default arr
