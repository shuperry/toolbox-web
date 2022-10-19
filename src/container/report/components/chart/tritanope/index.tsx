import React, { FC } from 'react'
import { isObject, isArray } from 'lodash-es'

import Img from '@/components/img'

import { ChartTritanopePropType } from '../types'

import styles from './index.less'

/**
 * 色彩辨别弱项分布图.
 *
 * @param {number[]} data 错误的色块序号数组, 取值 1 - 40.
 */
const ChartTritanope: FC<ChartTritanopePropType> = ({ data = { values: [], desc: '' } }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!isObject(data) || !isArray(data.values)) return <></>

  return (
    <div className={styles.wrapper}>
      <div className={styles['title-wrapper']}>色彩辨别弱项分布图</div>

      <div className={styles['chart-wrapper']}>
        {data.values
          .filter((val) => val <= 40)
          .map((val, idx) => (
            <Img
              key={`tritantope-mark-${idx}`}
              alt={`tritantope-mark-${val}`}
              style={{
                transform: `rotateZ(${(val - 1) * 9}deg)`,
                transformOrigin: '50% 100%',
              }}
              src={`/images/report/tritanope-mark.png`}
              className={styles['mark-img']}
            />
          ))}
      </div>

      {data.desc && <div className={styles['desc-wrapper']}>{data.desc}</div>}
    </div>
  )
}

export default ChartTritanope
