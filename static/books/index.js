import config from '~env/config'

const files = require.context('./', true, /\.(MD|md)$/)

const typeRelation = config.blogType

const fetchFilesInfo = (files, filesInfo = []) => {
  files.keys().forEach((file) => {
    const fileInfoArr = file.match(/\.\/mdBooks\/(\S*)\.(md|MD)/)[1].split('-')

    filesInfo.push({
      chapterId: fileInfoArr[0],
      createTime: fileInfoArr[1],
      RelaType: fileInfoArr[2],
      typeName: typeRelation[fileInfoArr[2]],
      chapterName: fileInfoArr[3],
      chapterContent: files(file),
    })
  })

  return filesInfo
}

export default fetchFilesInfo(files)
