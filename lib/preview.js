
const fs = require('fs')

const marked = require('marked')

const path = require('path')

// 加载browser-sync包 调用create
const bs = require('browser-sync').create()

let isStart = false // 标记 默认没有启动服务器

let templateStr = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')

module.exports = (filePath) => {
  // 读取markdown文件内容
  // 监视md文件内容的变化
  fs.watchFile(filePath, { persistent: true, interval: 500 }, (cur, pre) => {
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
        //当html文件生成之后再启动服务器
        if (!isStart) {
          // 如果启动了服务器 监听变化的时候就不需要重复启动服务器了
          isStart = true
          bs.init({
            server: {
              baseDir: "./",
              index: disPath
            }
          })
        }
        bs.reload('*.html')
      })
    })
  })


}