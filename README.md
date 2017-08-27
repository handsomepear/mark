# markdown 转换成 html 转换器

 ## 实现自动打开浏览器

 ## 实现文件变化浏览器自刷新

  - browsersync 包 这是一个什么包 我也不知道 你知道什么

## 命令行程序

需求：想要在终端中的任何 目录执行自定义命令作为一个工具来使用

1. 在`package.json`文件中加入 `bin` 字段： `bin: "命令名 执行脚本"` 例如如下：

- 如果命令名称和执行的文件名不同的话 bin字段要指定成对象的形式

```bash
"bin":{
  "test": "./itcast.js"
}
```

- 如果命令名称和json文件的  `name` 字段相同的话 bin字段可以直接指定一个字符串

```bash
"bin" : "./itcast.js"
``` 
 + 那么它就相当于

  ```bash
  "bin": {
    name : "./itcast.js"
  } 
  ``` 

bin字段是一个对象 里面是键值对的形式 键表示命令名称 值表示要执行的文件路径

注意：在所要执行的脚本代码中 第一行的位置加入如下内容: `#!/usr/bin/env node`

2. 打开终端 执行`npm link`  

3. 执行完 `npm link` 之后 npm会自动在全局包安装路径下添加一个对你当前项目的快捷方式映射 同时会自动在全局包安装目录的上一级目录生成一个`命令名.cmd` 文件

  因为 *.cmd文件所属目录已经配置到环境变量中了
  所以当你在执行 mark 的时候  实际上 根据环境变量找到了mark.cmd这个可执行文件

  然后 mark.cmd文件是DOS脚本命令(windows上专有的脚本命令)
  它内部 自动帮你去使用node执行 你锁指定的脚本路径
4. 发布到 npm

- `npm adduser` 命令注册

- `npm publish`