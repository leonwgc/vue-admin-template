# Vue Admin 学习项目

一个简洁的 Vue 3 后台管理示例，包含路由守卫、Pinia 全局用户状态、Axios 请求封装、用户 CRUD 表格和本地 Mock。

## 启动

需要 Node.js 20.19+ 或 22.12+。

```sh
npm install
npm run start
```

开发服务器默认运行在 `http://localhost:9000/`，并尝试自动打开浏览器。

登录账号：`admin`，密码：`admin`。这是仅用于本地学习的演示账号，不提供真实身份验证。

## 常用命令

```sh
npm run build
npm run preview
```

## 技术栈

- Vue 3.2.47 + `<script setup>` + JavaScript
- Vite 8.3.1 + `@vitejs/plugin-vue` 6.0.9
- Pinia 2.0.22
- Vue Router 4.2.5
- Element Plus 2.3.14
- Axios 1.6.8

生产构建使用 Vite 8 内置的 Rolldown；代码分包规则配置在 `vite.config.js` 的 `build.rolldownOptions.output.codeSplitting` 中。

## 数据与请求流程

页面从 Pinia `users` Store 读取用户列表并触发增删改查。Store 调用 `src/api/users.js`，经由 `src/api/http.js` 的 Axios 实例、拦截器和 Mock adapter；`src/api/mock.js` 在浏览器 `localStorage` 中读写数据。首次访问会创建示例用户，刷新后变更仍保留在当前浏览器。

将来接入后端时，可在 `src/api/http.js` 设置真实 API 地址并移除 `adapter: mockAdapter`，然后按后端响应格式调整接口模块。登录当前只保存在本地，用于演示 Router 守卫。

## Vue 3 交互式示例

登录后从侧栏的快速开始、Vue 基础、组件、逻辑复用、动画、状态管理、路由和开发实践分组进入各主题页面。页面包含简要概念、可交互演示、完整示例代码和官方文档链接，覆盖 SFC、模板语法、事件处理、响应式与 Composition API、生命周期、组件通信和 v-model、动态组件、provide/inject、Composables、Transition、Pinia、Vue Router、表单校验、自定义指令和 API 请求。Pinia 示例使用独立的内存态 store；表单提交为本地演示；API 页面只读加载 Mock 用户数据，并可安全演示 404 错误。

## 目录

```text
src/
  api/       Axios 实例、用户接口、本地 Mock
  components/ 可复用页面与示例组件
  layouts/   后台主布局
  router/    路由和登录守卫
  stores/    Pinia 登录与用户状态
  styles/    全局样式
  views/     登录、工作台、用户管理和 Vue 3 示例页面
```
