
const isProd = process.env.NODE_ENV === 'production'

const baseEnv = {
  stage: 'prod', // 发行版本
  routerBase: isProd ? '/vue-h5-pro' : '',
  routerMode: 'history',
  apiEnv: 'prod',
  apiBaseUrl: 'https://m.api.haoshiqi.net',
  isEnv(current) {
    const { stage } = this
    return (
      stage === current ||
      (Array.isArray(current) && current.indexOf(stage) > -1)
    )
  },
}

export default baseEnv
