import Vue from 'vue'
import Router from 'vue-router'
import env from '@/config/env'

Vue.use(Router)

const lazyLoad =
  process.env.NODE_ENV === 'production'
    ? file => () => import(/* webpackChunkName: "[request]" */ `@/views/${file}`)
    : file => require(`@/views/${file}`).default

// header 和 tabbar 如何控制
const routes = [
  {
    path: '',
    name: 'index',
    alias: '/index',
    component: lazyLoad('index/index'),
    meta: { title: '首页' },
  },
  {
    name: 'sort',
    component: lazyLoad('sort/index'),
    meta: { title: '分类', hide_header: 1 },
  },
  {
    name: 'sort1',
    component: lazyLoad('sort/sort1'),
    meta: { title: '分类-1', hide_header: 1, tabbar: 1 },
  },
  {
    name: 'fire',
    component: lazyLoad('fire'),
    meta: { title: '发现' },
  },
  {
    name: 'discover',
    component: lazyLoad('discover'),
    meta: { title: '发现' },
  },
  {
    name: 'cart',
    component: lazyLoad('cart'),
    meta: { title: '购物车' },
  },
  {
    name: 'profile',
    component: lazyLoad('profile'),
    meta: { title: '个人中心' },
  },
  {
    name: 'detail',
    component: lazyLoad('detail'),
    meta: { title: '商品详情' },
  },
  {
    name: 'login',
    component: lazyLoad('login'),
    meta: { title: '快捷登录' },
  },
  {
    name: 'address',
    component: lazyLoad('order-commit'),
    meta: { title: '确认订单', needAuth: true },
  },
  {
    name: 'order-commit',
    component: lazyLoad('order-commit'),
    meta: { title: '确认订单', needAuth: true },
  },
  {
    name: 'search',
    component: lazyLoad('search'),
    meta: { title: '搜索' },
  },
  {
    name: 'login-help',
    component: lazyLoad('help/login-help'),
    meta: { title: '登录帮助' },
  },
  {
    name: 'service',
    component: lazyLoad('help/service'),
    meta: { title: '客户服务' },
  },
  {
    name: 'history',
    component: lazyLoad('history'),
    meta: { title: '浏览历史' },
  },
]

if (env.isEnv('prod')) {
  routes.unshift({
    name: 'debug',
    component: lazyLoad('common/debug'),
    meta: { title: 'Debug 调试页面' },
  })
  routes.unshift({
    name: 'tab',
    component: lazyLoad('demo/tab'),
    meta: { title: 'Tab' },
  })
  routes.unshift({
    name: 'scroll',
    component: lazyLoad('demo/scroll'),
    meta: { title: '滚动列表' },
  })
}

routes.push(
  // 处理特殊路由
  {
    path: '*',
    redirect: '/', // 必须有对应路由，不然会栈溢出
  },
)

// add route path
routes.forEach(route => {
  if (typeof route.path === 'undefined') route.path = '/' + (route.name || '')
})

const router = new Router({
  mode: env.routerMode,
  base: env.routerBase,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
  routes,
})

export default router
