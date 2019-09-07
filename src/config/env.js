const baseEnv = {
  stage: 'prod', // 发行版本
  routerBase: '/vue-h5-pro/',
  routerMode: 'history',
  apiEnv: 'prod',
  apiBaseUrl: 'https://m.api.xxx.com',
  isEnv(current) {
    const { stage } = this
    return (
      stage === current ||
      (Array.isArray(current) && current.indexOf(stage) > -1)
    )
  },
}

export default baseEnv
