# Vue Admin 学习项目

一个简洁的 Vue 3 后台管理示例，包含路由守卫、Pinia 全局用户状态、Axios 请求封装、用户 CRUD 表格和本地 Mock。

## 启动

```sh
npm install
npm run dev
```

登录账号：`admin`，密码：`admin`。这是仅用于本地学习的演示账号，不提供真实身份验证。

## 常用命令

```sh
npm run build
npm run preview
```

## 技术栈

- Vue 3.2 + `<script setup>` + JavaScript
- Vite 4
- Pinia 2.0.22
- Vue Router 4
- Element Plus
- Axios

## 数据与请求流程

页面从 Pinia `users` Store 读取用户列表并触发增删改查。Store 调用 `src/api/users.js`，经由 `src/api/http.js` 的 Axios 实例、拦截器和 Mock adapter；`src/api/mock.js` 在浏览器 `localStorage` 中读写数据。首次访问会创建示例用户，刷新后变更仍保留在当前浏览器。

将来接入后端时，可在 `src/api/http.js` 设置真实 API 地址并移除 `adapter: mockAdapter`，然后按后端响应格式调整接口模块。登录当前只保存在本地，用于演示 Router 守卫。

## 目录

```text
src/
  api/       Axios 实例、用户接口、本地 Mock
  layouts/   后台主布局
  router/    路由和登录守卫
  stores/    Pinia 登录与用户状态
  styles/    全局样式
  views/     登录、工作台、用户管理页面
```
