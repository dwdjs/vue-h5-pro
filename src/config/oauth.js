import env from '@/config/env'

const authUrl = '/open/common/auth'
const authCallbackUrl = `${location.origin}${env.routerBase}/oauth`

const oAuth = {
  wechat: {
    clentId: '',
    type: 'wechat',
    clientName: '微信登录',
    authUrl: `${env.apiBaseUrl}${authUrl}`,
    color: '#4cb131',
    authCallbackUrl,
  },
  alipay: {
    clentId: '',
    type: 'alipay',
    clientName: '支付宝登录',
    authUrl: `${env.apiBaseUrl}${authUrl}`,
    color: '#0a98dc',
    authCallbackUrl,
  },
}

export default oAuth
