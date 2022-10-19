// https://umijs.org/config/
import { defineConfig } from 'umi'

import defaultSettings from './defaultSettings'
import proxy from './proxy'
import routes from './routes'

const { REACT_APP_ENV } = process.env
const cdnPath = '/'

export default defineConfig({
  publicPath: cdnPath,
  runtimePublicPath: true,
  hash: true,
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: true,
  },
  layout: false,
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: false,
  ignoreMomentLocale: true,
  title: false,
  antd: {},
  targets: {
    ie: 11,
  },
  dynamicImport: {},
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor, // 主题色
    'success-color': '#44b979', // 成功色
    'warning-color': '#faad14', // 警告色
    'error-color': '#f5222d', // 错误色
    'border-radius-base': '4px', // 各元素圆角大小
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // Fast Refresh 热更新
  fastRefresh: {},
  nodeModulesTransform: { type: 'none' },
  webpack5: {},
  exportStatic: {},
})
