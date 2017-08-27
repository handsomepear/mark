
const fs = require('fs')

const marked = require('marked')

const path = require('path')

// 一个自动打开指定文件的包
const opener = require('opener')

let templateStr = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')

module.exports = (filePath) => {
  // 读取markdown文件内容

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    // 生成html字符串(marked包) 
    data = marked(data)
    data = templateStr.replace('^_^', data)
    let disPath = `./${path.parse(filePath).name}.html`
    fs.writeFile(disPath, data, (err) => {
      if (err) {
        throw err
      }
      console.log("文件转换成功")
      opener(disPath) // 自动打开编译之后的html文件
    })
  })
}