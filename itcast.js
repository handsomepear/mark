#!/usr/bin/env node

// 上面的命令的意思： 找到node的执行环境 然后使用node执行当前程序

// test 命令 相当于 node itcast.js
const fs = require('fs')


// 可以直接加载一个json文件 得到的是一个json对象
const packageJson = require('./package.json')

const build = require('./lib/build')

const preview = require('./lib/preview')

// 获取到命令执行时候的参数
let args = process.argv.slice(2)

/* let data = fs.readFileSync('./README.md', 'utf8')

console.log(data) */

let filePath = args[0]

// md build markdown文件名的时候 自动将markdown文件转换成html文件 然后生成到当前目录

let commond = args[0]

switch (commond) {
    case "build":
        // 生成指定markdown文件到html文件
        build(args[1])
        break;
    case "preview":
        // 预览markdown文集爱你 实时刷新
        preview(args[1])
        break;
    case "help":
        console.log("test build markdown文件名  -- 根据指定的markdown文件生成html文件");
        console.log("test preview markdown文件名  -- 根据指定的markdown文件实时预览html文件");
        break;
    case "--version":
        console.log("test  " + packageJson.version);
        break;

    default:
        break;
}