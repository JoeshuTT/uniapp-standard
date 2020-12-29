# uniapp-standard

> 你需要在本地提前安装好 [VS Code](https://code.visualstudio.com/)，[node](http://nodejs.org/)，[git](https://git-scm.com/)，[vue cli](https://cli.vuejs.org/)。
已经阅读过 [uni-app](https://uniapp.dcloud.io/quickstart-cli)。不熟悉 cli 创建 `uni-app` 项目的不建议上本架子，听官方的话，用HX可视化新建项目，避免带来其他烦恼。


## 当前使用

VS Code 1.52.1

node v12.18.3

npm 6.14.6

@vue/cli 4.5.9

@dcloudio/uni-xxxx  29820201110001

## 特性

- 合理的项目结构
- 常用工具类
- 统一项目代码风格，使用 eslint 语法检查 和 prettier 格式化
- 提供 uni-app 代码块（vscode），拥有和 HBuilderX 一样的代码块
- 提供 `vue.config.js`，已内置 `发布时删除console`，`devServer.proxy 跨域请求代理`
- 提供了一些常用的样式代码片段，全局样式变量，统一项目样式风格

## VSCode 最佳实践

1. `VS Code` 安装插件 `Vetur`，`ESLint`，`Prettier - Code formatter`
2. 项目根目录下已经配置好了 `.vscode/settings.json`，可以保存时自动修复 Prettier 和 ESLint 错误
## 目录结构

应用的目录结构如下

```bash
├── dist                       # 默认build输出目录
├── unpackage                  # HX打包输出目录
├── public                     # public
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── common                 # 公共文件目录
│   ├── components             # 全局公用组件
│   ├── config                 # 项目配置目录
│   ├── filters                # 全局 filter, wxs
│   ├── mixins                 # 全局 mixins
│   ├── mock                   # Mock文件目录
│   ├── lang                   # 国际化 language
│   ├── pages                  # 所有页面
│   ├── schema                 # 数据模型目录
│   ├── static                 # 静态资源目录
│   ├── store                  # 全局 store
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件
│   ├── manifest.json          # 项目应用配置
│   ├── pages.json             # 项目页面配置
│   └── uni.scss               # uni-app内置的 `scss`
├── .editorconfig              # 编辑器配置
├── .eslintignore              # eslint 忽略文件配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # Git忽略文件配置
├── .prettierignore            # prettier 忽略文件配置
├── .prettierrc.js             # prettier 配置项
├── .babel.config.js           # babel-loader 配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
├── postcss.config.js          # postcss 配置
├── tsconfig.json              # tsconfig.json

```

## 安装

```bash
# 克隆项目
git clone https://github.com/JoeshuTT/uniapp-standard.git my-pro

# 进入项目目录
cd my-pro

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 或者换源（切换成阿里的淘宝源)，然后正常使用就行
npm config set registry https://registry.npm.taobao.org
npm install
```

## 启动

```
npm run serve
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```
## 在 `pages.json` 下配置 easycom 模式

```
"easycom": {
    "autoscan": true,
    "custom": {
        "^uni-(.*)": "@/components/uni-ui/uni-$1/uni-$1.vue",
        "^i-(.*)": "@/components/i-ui/i-$1/i-$1.vue"
    }
}
```

## 参考链接

[使用 `vue-cli` 快速创建项目](https://uniapp.dcloud.io/quickstart-cli)

[当 uni-app 遇见 vscode](https://ask.dcloud.net.cn/article/36286)
