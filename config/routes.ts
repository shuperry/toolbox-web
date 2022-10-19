/**
 * icon 参数支持 antd-icon 和 iconfont.
 *
 * antd-icon 名称与图标对应关系前往 src/components/layout/icon-map 中添加.
 * iconfont 图标名称请以 'icon-' 开头, 再加上 font class 用法的图标名称, e.g: icon-iconzhaiyao.
 * ! 需更新 iconfont 图标库前往 src/pages/document.ejs 中替换 iconfont css 链接.
 */
export default [
  {
    path: '/',
    redirect: '/web-tool/welcome',
  },
  {
    path: '/user',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        name: 'login',
        title: '登录',
        path: '/user/login',
        component: '@/pages/login',
      },
      {
        component: '@/pages/404',
      },
    ],
  },
  {
    path: '/web-tool/report',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        name: 'pdf报告',
        title: 'pdf报告',
        path: '/web-tool/report/pdf',
        component: '@/pages/report/pdf-test',
      },
      {
        component: '@/pages/404',
      },
    ],
  },
  {
    path: '/web-tool',
    component: '@/layouts',
    flatMenu: true,
    routes: [
      {
        path: '/',
        redirect: '/web-tool/welcome',
      },
      {
        name: '欢迎',
        title: '欢迎',
        path: '/web-tool/welcome',
        icon: 'smile',
        component: '@/pages/welcome',
      },
      {
        name: '报告设计器',
        title: '报告设计器',
        path: '/web-tool/diy-report',
        icon: 'barchart',
        component: '@/pages/diy-report',
      },
      {
        name: '报告测试',
        title: '报告测试',
        path: '/web-tool/pdf-test',
        icon: 'areaChart',
        component: '@/pages/report/pdf-test.tsx',
      },
      {
        name: '管理页',
        path: '/admin',
        icon: 'crown',
        component: '@/layouts/blank',
        access: 'canAdmin',
        hideInMenu: true,
        routes: [
          {
            name: '二级管理页',
            title: '管理页 - 二级管理页',
            path: '/admin/sub-page',
            component: '@/pages/welcome',
          },
          {
            component: '@/pages/404',
          },
        ],
      },
      {
        component: '@/pages/404',
      },
    ],
  },
]
