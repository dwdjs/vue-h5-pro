import { copy } from '@dwdjs/utils'

/**
 * API 命名规则
 * - 使用 camelCase 命名格式（小驼峰命名）
 * - 命名尽量对应 RESTful 风格，`${动作}${资源}`
 * - 假数据增加 fake 前缀
 * - 便捷易用大于规则，程序是给人看的
 */
let params = {}
let reqHeaders = {}

// api 列表
export const modelApis = {
  // 初始化配置
  // test: 'https://easy-mock.com/mock/5aa79bf26701e17a67bde1d7/',
  // errReport: 'POST https://tongji.doweidu.com/log.php',
  getWxSign: '/open/common/getwxsign',

  getConfig: '/open/common/appconfig',
  // 获取七牛 token
  getQiniuToken: '/open/common/qiniutoken',
  getOpenIm: '/open/common/openim',
  getOauth: '/open/common/oauth',

  // 通用
}

export const commonParams = {
  init(data) {
    params = copy(data)
  },
  set(obj) {
    Object.assign(params, obj)
  },
  get(key) {
    return key ? copy(params[key]) : copy(params)
  },
}

export const headers = {
  init(data) {
    reqHeaders = copy(data)
  },
  set(obj) {
    Object.assign(reqHeaders, obj)
  },
  get(key) {
    return key ? copy(reqHeaders[key]) : copy(reqHeaders)
  },
}
