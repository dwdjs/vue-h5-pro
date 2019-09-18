import { storage, compactObject } from '@dwdjs/utils'
import env from '@/config/env'
import request from '@/api/request'
import { modelApis, commonParams, headers } from '@/api/api.config'

const regHttp = /^https?/i
const userInfo = storage.get('userInfo') || {}
const apiBaseUrl = `${env.apiBaseUrl}`
const { width, height } = window.screen

// 公共参数
headers.init({

})
commonParams.init({
  token: userInfo.token,
  user_id: userInfo.id, // 用户唯一标志
  // udid: env.getUUID(),
  timestamp: '', // 时间
  platform: 'h5', // 渠道
  channel: 'h5', // 渠道
  spm: 'h5',
  version: env.version, // 系统版本
  swidth: width, // 屏幕宽度 分辨率
  sheight: height, // 屏幕高度
})

const apiList = Object.keys(modelApis).reduce((api, key) => {
  const val = modelApis[key]
  const [url, methodType = 'GET'] = val.split(/\s+/).reverse()
  const method = methodType.toUpperCase()
  api[key] = function req(params, success, fail) {
    const originUrl = regHttp.test(url)
      ? url
      : `${env.scheme}//${apiBaseUrl}${url}`
    const temp = compactObject(Object.assign({}, commonParams.get(), params))
    const header = headers.get()
    return request({
      url: originUrl,
      method,
      options: temp,
      success,
      fail,
      header,
    })
  }
  return api
}, {
  setCommonParams: commonParams.set,
  getCommonParams: commonParams.get,
  setHeader: headers.set,
  getHeader: headers.get,
})

export default apiList
