import { extend } from 'umi-request'
import { headerCache } from '@/utils/cache'
// 不提示错误信息的错误码.
const silentErrCodes = [0, 10048, 10070, 10050]

const request = extend({
  prefix: '/api/v1',
  credentials: 'include',
})

request.interceptors.request.use((_, options) => {
  const { method, withToken, packageParams } = options

  const isDataParamMethod = ['post', 'put', 'patch'].includes(method)

  if (packageParams && isDataParamMethod) {
    const paramKey = isDataParamMethod ? 'data' : 'params'

    options[paramKey] = {
      param: options[paramKey] || {},
    }

    if (withToken) {
      const header = headerCache.get() || {}
      header.platform = 1
      if (typeof header.requestId === 'number') {
        header.requestId = header.requestId + 1
      } else {
        header.requestId = 1
      }
      options[paramKey].header = header
    }
  }
  console.log(options)
  return {
    options,
  }
})

request.interceptors.response.use(async (response) => {
  try {
    const res = await response.clone().json()
    const { code, message } = res
    res.data && res.data.header && headerCache.set(res.data.header)
    return response
  } catch (e) {
    console.error(e)
  }
})

export default request
