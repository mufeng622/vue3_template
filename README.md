# Vue 3 + Typescript + Vite
框架基于vue3 + ts + vite + pinia搭建，可用于日常简单开发pc端，暂未适配移动端。并且加入了eslint、prettier等配置内容。

### 基本结构

- src目录：
  - assets：包含图片和基础公共样式
  - components：公共自定义组件
  - pages：业务组件
  - router：路由
  - serive：请求相关内容，包括封装方法、api等
  - store：状态管理，采用pinia
- .env.development：开发环境配置，包括baseurl、是否代理、node环境等
- .env.preproduction：测试/预生产环境配置
- .env.production：生产环境配置

### 说明

> 1、路由调用 createWebHashHistory 方法，采用的是hash模式

> 2、网络请求使用 axios 封装，分别封装了 get/post/upload/download 方法，具体传参可以查看 serive/http.ts 方法。

> 3、网络请求方法采用ts书写，serive/test 文件夹下，每个模块接口采用文件夹单独分离，包括如下三部分：

     api.ts：统一管理接口地址

     types.ts：统一管理各个接口传参及请求方法约束

     test.ts：请求的具体方法，并导出请求

> 4、区分环境，可以通过 process.env.NODE_ENV 区分各个环境，如需新增环境变量，务必通过 VITE_ 开头去定义，才能被vite获取。

     取环境变量，通过 import.meta.env 方式获取

     vite.config.js获取环境变量，通过 loadEnv 方法获取

     .env.devemopment：为开发环境

     .env.preproduction： 为预生产/测试环境

     .env.production： 未生产环境

### 项目打包
npm run dev : 开发环境

npm run build:pre : 打包测试

npm run build : 打包生产
