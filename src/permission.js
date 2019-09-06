import router from '@/router'

router.beforeEach((to, from, next) => {
  const { meta = {} } = to

  // 解决拦截 router-link 跳转问题
  if (meta.status === -1) {
    return next(false)
  }

  if (meta.title) {
    document.title = meta.title
  }

  // 确保一定要调用 next()
  return next()
})
