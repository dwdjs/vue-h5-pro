import Vue from 'vue'
import Router from 'vue-router'
import env from '@/config/env'

Vue.use(Router)

const lazyLoad =
  process.env.NODE_ENV === 'production'
    ? file => () => import(/* webpackChunkName: "[request]" */ `@/view/${file}`)
    : file => require(`@/view/${file}`).default

const routes = [
  {
    path: '',
    name: 'index',
    alias: '/index',
    component: lazyLoad('index'),
    meta: { title: '首页' },
  },
  {
    name: 'sort',
    component: lazyLoad('sort'),
    meta: { title: '分类' },
  },
  {
    name: 'fire',
    component: lazyLoad('fire'),
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
]

if (env.isEnv('prod')) {
  routes.unshift({
    name: 'debug',
    component: lazyLoad('common/debug'),
    meta: { title: 'Debug 调试页面', needAuth: false },
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
