import env from '@/config/env'

const authUrl = '/open/common/auth'
const authCallbackUrl = `${location.origin}${env.routerBase}/oauth`

const oAuth = {
  wechat: {
    clentId: '',
    type: 'wechat',
    icon: 'user',
    clientName: '微信登录',
    authUrl: `${env.apiBaseUrl}${authUrl}`,
    authCallbackUrl,
  },
  alipay: {
    clentId: '',
    type: 'alipay',
    icon: 'pay-circle-o',
    clientName: '支付宝登录',
    authUrl: `${env.apiBaseUrl}${authUrl}`,
    authCallbackUrl,
  },
}

export default oAuth
