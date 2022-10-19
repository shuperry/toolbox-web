// import React, { useState } from 'react';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout'
import Loading from '@/components/loading'

import defaultSettings from '../config/defaultSettings'

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <Loading />,
}

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>
  currentUser?: API.CurrentUser
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>
}> {
  return {
    currentUser: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      access: 'admin',
    },
    settings: defaultSettings,
  }
}
