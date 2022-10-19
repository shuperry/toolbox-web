import React, { useState } from 'react'
import type { BasicLayoutProps } from '@ant-design/pro-layout'
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Link } from 'umi'
import { Space } from 'antd'
import { toString } from 'lodash-es'

import HeaderAction from '@/components/layout/header/action'
import Footer from '@/components/footer'
import Img from '@/components/img'
import IconMap from '@/components/layout/icon-map'

import menuRoutes from '../../config/routes'

import defaultSettings from '../../config/defaultSettings'

const loopMenuItem = (_routes: MenuDataItem[]): MenuDataItem[] =>
  _routes.map(({ icon, routes, ...item }) => ({
    ...item,
    icon:
      toString(icon).indexOf('icon-') === 0 ? (
        <span className="anticon">
          <i className={`iconfont ${toString(icon).substr(5)}`}></i>
        </span>
      ) : icon ? (
        IconMap[icon as string]
      ) : (
        <span className="anticon"></span>
      ),
    routes: routes && loopMenuItem(routes),
  }))

const getTitle = (menuItem: MenuDataItem): string => {
  if (menuItem.title) {
    return menuItem.title
  } else {
    return toString(menuItem.name) || toString(defaultSettings.title)
  }
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props

  const [collapsed, setCollapsed] = useState(false)

  return (
    <ProLayout
      {...defaultSettings}
      menu={{ request: async () => loopMenuItem(menuRoutes) }}
      siderWidth={170}
      menuHeaderRender={(_logo, title) => (
        <div>
          <Img style={{}} src="/images/logo.png" />
          {title}
        </div>
      )}
      menuItemRender={(menuItem, defaultDom) => {
        if (menuItem.isUrl || !menuItem.path || location.pathname === menuItem.path) {
          document.title = getTitle(menuItem)

          return (
            <span className="menu-item-link" onClick={() => (document.title = getTitle(menuItem))}>
              <Space>{defaultDom}</Space>
            </span>
          )
        }

        return (
          <Link to={menuItem.path} onClick={() => (document.title = getTitle(menuItem))}>
            <Space>{defaultDom}</Space>
          </Link>
        )
      }}
      collapsedButtonRender={false}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      pageTitleRender={false}
      headerTitleRender={false}
      headerContentRender={() => {
        return (
          <div
            style={{
              fontSize: '16px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
            ) : (
              <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
            )}
          </div>
        )
      }}
      rightContentRender={() => <HeaderAction />}
      disableContentMargin={false}
      footerRender={() => <Footer />}
    >
      {children}
    </ProLayout>
  )
}

export default BasicLayout
