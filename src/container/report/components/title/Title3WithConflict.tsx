import React, { FC } from 'react'
import classnames from 'classnames'

import Img from '@/components/img'

import styles from './index.less'

interface IndexProps {
  title: string // 标题
  conflictLevel: string // 冲突等级 {'serious' | 'normal' | 'special'}.
}

const conflictConf = {
  serious: {
    img: '/images/report/conflict-serious.png',
    text: '严重冲突',
  },
  normal: {
    img: '/images/report/conflict-normal.png',
    text: '一般冲突',
  },
  special: {
    img: '/images/report/conflict-special.png',
    text: '需要关注',
  },
}

const conflictLevels = ['serious', 'normal', 'special']

const Index: FC<IndexProps> = ({ title, conflictLevel }) => {
  return (
    <div className={styles['title3-with-conflict-wrapper']}>
      <span>{title}</span>
      {conflictLevels.includes(conflictLevel) && (
        <div className={classnames(styles['conflict-container'], styles[`bg-c-${conflictLevel}`])}>
          <Img src={conflictConf[conflictLevel].img} className={styles.img} />
          <span className={styles.text}>{conflictConf[conflictLevel].text}</span>
        </div>
      )}
    </div>
  )
}

export default Index
