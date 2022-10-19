import { Space } from 'antd'
import React from 'react'
import { useModel } from 'umi'

import Avatar from './avatar'

import styles from './index.less'

export type SiderTheme = 'light' | 'dark'

const HeaderAction: React.FC = () => {
  // @ts-ignore
  const { initialState } = useModel('@@initialState')

  if (!initialState || !initialState.settings) {
    return null
  }

  return (
    <Space className={styles.right}>
      <Avatar />
    </Space>
  )
}

export default HeaderAction
