# uniapp-standard

> 你需要在本地提前安装好 [VS Code](https://code.visualstudio.com/)，[node](http://nodejs.org/)，[git](https://git-scm.com/)，[vue cli](https://cli.vuejs.org/)。
已经阅读过 [uni-app](https://uniapp.dcloud.io/quickstart-cli)。
## 特性
- 合理的项目结构
- 常用工具类
- 统一项目代码风格，使用 eslint 语法检查 和 prettier 格式化
- 提供 uni-app 代码块（vscode）

## VSCode 最佳实践

1. `VS Code` 安装插件 `Vetur`，`ESLint`，`Prettier - Code formatter`
2. 项目根目录下已经配置好了 `.vscode/settings.json`，可以保存时自动修复 Prettier 和 ESLint 错误
## 目录结构

应用的目录结构如下

```bash
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── plop-templates             # 基本模板
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babel.config.js           # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
```

## 安装

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-element-admin.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

```

## 启动


