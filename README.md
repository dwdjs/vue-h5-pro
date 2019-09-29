# vue-h5-pro

开箱即用的H5前端/设计解决方案(Vue)

此示例工程，基于 vue-cli 3 + vant 搭建。

## 目标

- 贴合真实需求
- 收集场景需求
- 解决存在问题
- 追求极致体验

### 功能清单

UI设计仿 JD

- [ ] 个人中心
- [ ] 列表页
- [ ] 搜索页
- [ ] 搜索结果及筛选
- [ ] 登录
- [ ] 地址选择
- [ ] 分类页
- [ ] 购物车页
- [ ] 加购功能
- [ ] Icon 解决方案
- [ ] Oauth 授权实现
- [ ] tab 切换
- [ ] 虚拟列表

### 功能增强

- [x] 采用 vw/vh 移动端适配方案，并禁用缩放
- [x] 区分router 在 dev/prod 模式下的引入方式，开发模式编译更快
- 增加 debug 调试功能，
  - [x] 引入 vConsole
  - [x] 增加 vscode debug 配置（此配置非常适合 nodejs 程序，web 程序还需要调试 dom，不算方便）
  - [ ] 结合 api 配置接口，支持动态切换 api（或使用代理切换）
- [x] 添加 eslint + prettier 代码格式检查，并对格式预期可控，参看[./docs/rule.md]
- [x] 锁定 package.json 版本号，避免非预期的升级更新
- [x] 封装 docker
- webpack 优化
  - [x] 添加 babel 插件，开发环境支持 console.log，生产包自动清除
  - [x] Code Splitting 拆分代码块
  - [x] 处理第三方独立模块的按需引用问题
  - [ ] 独立稳定跨端包抽取 dll，能提高缓存及跨端复用，也能提升编译速度
    - [ ] vue-h5-pro: `['vue/dist/vue.runtime.esm.js', 'vue-router', 'vuex', 'axios', 'register-service-worker', 'qs']`
    - [ ] vue-admin-pro: `[...${vueH5Pro}, 'nprogress', 'resize-observer-polyfill', 'element-ui']`
- [ ] 封装 axios API 请求，让使用更便捷
- [ ] 优化推广或分享页面进入场景，先中转首页再进入目的页面，并优化 back 显示，灵活控制
- [ ] JSBridge/SDK 接入方案，多场景同时接入时，如何隔离
- [ ] 数据统计接入方案
- [ ] 错误上报统计功能
- [ ] 区分配置 开发/生产包的 routerBase
- [ ] release 发布
  - [ ] 保存 sourceMap，用于跟踪调试线上 bug
- [ ] 应对 CPS 需求实现，代码隔离优化
- [ ] 解决 vue.config.js 的不透明问题，改配置为 webpack 配置
- [ ] 增加 TDD 示例，详见 [vue-test-utils-getting-started](https://github.com/dwdjs/vue-test-utils-getting-started) 可参考 https://vue-test-utils.vuejs.org/zh/guides/

### 页面功能扩展

收集常见需求场景实现

- 增加 header 使用场景
  - [x] 灵活控制显示隐藏
  - [ ] 优化header左右按钮操作体验
  - [ ] 灵活控制 header 左中右三部分内容及 点击事件
  - [ ] 对 header 和 footer 进行显示优化，自适应窗口大小时不应过高
- [x] 增加 tab-bar 使用场景，复用 cart 页面逻辑，灵活控制显示隐藏
- [ ] 增加友好的错误页面，支持点击刷新
- [ ] 调整登录/注册界面，弹出式调用更友好
- [ ] 优化H5 OAuth 授权流程
  - 之前授权跳转获取 code 都在前端实现，现改为在服务端实现（提高性能）
  - 点击触发授权，前端只需跳转对应的 apiUrl，传入回跳地址 authCllbackUrl 即可
- [ ] 优惠券列表、领券、选择、使用等使用场景
- [ ] 地址列表、选择、添加、编辑等使用场景
- [ ] 公告、通知相关使用场景
- [ ] sku 选择相关逻辑
- [ ] 详情页配送地址相关逻辑
- [ ] 购物车相关逻辑
- 优化加载体验
  - [ ] 增加 loading 占位页面
  - [ ] 增加骨架屏使用场景示例
  - [ ] 性能问题 [关于 Violation](https://stackoverflow.com/questions/41218507/violation-long-running-javascript-task-took-xx-ms)
- active兼容处理(即 伪类 :active 失效)
  - 方法 1：body添加 `ontouchstart`
  - js给 document 绑定 touchstart 或 touchend 事件 `document.addEventListener('touchstart', function(){}, false);`

## 运行

``` bash
# 安装依赖
yarn

# 本地开发
# 通过 localhost:8080 访问页面
npm run serve

# 生产环境构建
npm run build

# 代码格式校验
npm run lint
```

## 封装 docker

参见 [./docs/docker.md](./docs/docker.md)
