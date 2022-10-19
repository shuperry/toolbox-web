import { merge, isNull, isUndefined } from 'lodash'
import { RequestOptionsInit } from 'umi-request/types'

import request from '@/utils/request/umi'

interface ReqParamType {
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete' // 请求方法名, 默认: get.
  prefix?: string // 请求地址前缀, 默认: /api/v1
  url: string // 请求地址.
  params?: any // 请求参数.

  // 非 get / delete 请求 url 中的 query-string 参数, get 接口时推荐使用 params 参数.
  query?: {
    [key: string]: any
  }
}

interface ReqOptionsType {
  withToken?: boolean // 是否携带 token 参数.
  packageParams?: boolean // 针对 post / put / patch 接口是否将 header 相关参数封装到请求 body 中.

  useCache?: boolean // 是否使用缓存.
  ttl?: number // 请求缓存过期时间, 单位: 毫秒.

  // 请求是否携带 cookie, 默认: include.
  // 说明:
  //      omit (不携带),
  //      same-origin (只有在请求同域名地址时携带),
  //      include (携带, 即使跨域名请求也携带).
  credentials?: 'omit' | 'same-origin' | 'include'
}

// define default params.
const defMethod = 'get'
const defPrefix = '/api/v1'
const defCredentials = 'include'
const defWithToken = true
const defPackageParams = true
const defUseCache = false
const defCacheTtl = 60 * 1000 // 60 seconds.

export default async ({ method, prefix, url, params, query }: ReqParamType, options?: ReqOptionsType): Promise<any> => {
  if (options?.useCache && !options?.ttl) {
    throw new Error('请求使用缓存时请设置缓存过期时间参数 (名称: ttl, 单位: 毫秒).')
  }

  const reqOptions: RequestOptionsInit = {
    prefix: prefix || defPrefix,
    method: method || defMethod,
    credentials:
      isUndefined(options?.credentials) || isNull(options?.credentials) ? defCredentials : options?.credentials,
    withToken: isUndefined(options?.withToken) || isNull(options?.withToken) ? defWithToken : options?.withToken,
    packageParams:
      isUndefined(options?.packageParams) || isNull(options?.packageParams) ? defPackageParams : options?.packageParams,
    useCache: isUndefined(options?.useCache) || isNull(options?.useCache) ? defUseCache : options?.useCache,
    ttl: isUndefined(options?.ttl) || isNull(options?.ttl) ? defCacheTtl : options?.ttl,
  }

  if (['post', 'put', 'patch'].includes(method || defMethod)) {
    reqOptions.data = params
    reqOptions.params = query || {}
  } else {
    reqOptions.params = merge({}, typeof params === 'object' ? params : {}, query || {})
  }

  return request(url, reqOptions)
}
