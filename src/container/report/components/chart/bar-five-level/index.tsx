import React, { FC } from 'react'
import styles from './index.less'
import classNames from 'classnames'
import Img from '@/components/img'

/**
 * 五级条形图
 *
 * @param {string} title 标题
 * @param {number} data 偏好关键词，可选范围[1(几乎没有),2（较弱）,3（一般）,4（较强）,5（强）]
 */
const ChartBarFiveLevel: FC<{ data: number; title: string }> = ({ data, title }) => {
  return (
    <>
      <div className={styles['five-level-box']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['image']}>
          <Img src={`/images/report/fiveLevelBar_${data}.png`} />
        </div>
      </div>
    </>
  )
}

export default ChartBarFiveLevel
