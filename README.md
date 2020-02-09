## react项目模板


### 目录说明
```
.
|____.babelrc                           # babel配置
|____LICENSE                            # 项目协议
|____dist                               # 打包产出目录
|____README.md 
|____.gitignore
|____package-lock.json
|____package.json
|____build 
| |____plugins                          # 自定义的webpack插件
| | |____MyPlugin.js                    
| |____server                           # 脚本
| | |____buildServer.js                     # 打包脚本
| | |____devServer.js                       # 本地开发server
| |____webpackConfig                    # webpack配置
| | |____webpack.dev.config.js              # 开发时配置
| | |____webpack.base.config.js             # 基本配置
| | |____webpack.build.config.js            # 打包时配置
| | |____devProxyConfig.js                  # 本地开发代理配置
|____postcss.config.js                  # postcss 配置
|____src // 项目代码
| |____template                         # html模板
| | |____template.html
| |____lib                              # 公用库代码
| | |____tools.js
| |____index.js                         # 入口文件js
| |____index.scss                       # 入口文件css
```

### 自定义
1、更改打包配置，直接修改`build`目录下的代码即可。
2、安装其他依赖，直接`npm install [package]`即可。

### 命令
- 本地开发： `npm run dev`
- 打包： `npm run build`