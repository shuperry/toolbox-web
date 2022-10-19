import React, { FC } from 'react'
import { toNumber } from 'lodash-es'

import Img from '@/components/img'

import { ChartDiscItemType } from '../types'

import styles from './index.less'

// 中间刻度 0 位置( 0 ~ 1 或 0 ~ -1) 相隔高度.
const perPieceHeight = 130

// 刻度开始位置所处的高度.
const markStartHeight = 95

/**
 * 根据数值计算纵坐标位置.
 *
 * @description 负数时高度需要加上 0 ~ 1完整的高度.
 *
 * @param val 取值在 1 至 -1 范围内.
 */
const getTopDistancesByVal = (vals: number[], forLine = false) => {
  return vals.map((val) => {
    if (val <= 0) {
      return (
        toNumber((markStartHeight + perPieceHeight + perPieceHeight * Math.abs(val)).toFixed(2)) -
        (val === 0 ? 4 : 0) +
        (forLine ? 8 : 0)
      )
    }

    return toNumber((markStartHeight + perPieceHeight * (1 - val)).toFixed(2)) - (!forLine ? 15 : 0)
  })
}

// 每个有效数据点距离左侧边缘位置.
const markLeftDistances = [35, 85, 135, 185]

// 每个连线开始位置横坐标.
const linePointLeftDistances = [50, 100, 150, 200]

// 每个无效数据点距离左侧边缘位置.
const dotLeftDistances = [41, 91, 141, 191]

/**
 * DISC 图表.
 *
 * @param {
 *    Array<{
 *      title: string, // 标题.
 *      values: [number, number, number, number], // 数字取值在 1 至 -1 范围内.
 *      type: string // 图类型, DISC 四个字母中未出现的字母将会不显示值代表的动物图标.
 *    }>
 * } data 列表渲染源数据.
 */
const ChartDiscItem: FC<{ data: ChartDiscItemType }> = ({ data }) => {
  // 为防止缺失参数导致页面报错, 作兼容处理.
  const _type = data.type || ''
  const _typeDesc = data.typeDesc || ''

  const markTopDistances = getTopDistancesByVal(data.values)
  const lineTopDistances = getTopDistancesByVal(data.values, true)

  return (
    <div className={styles.chart}>
      <div className={styles.title}>
        <span className={styles['title-text']}>{data.title}</span>
      </div>

      <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" style={{ width: '250px', height: '416px' }}>
        {data.values.map((_, idx) => {
          if (idx < data.values.length - 1) {
            return (
              <line
                key={`disc-line-${idx}`}
                x1={linePointLeftDistances[idx]}
                y1={lineTopDistances[idx]}
                x2={linePointLeftDistances[idx + 1]}
                y2={lineTopDistances[idx + 1]}
                style={{ stroke: '#666', strokeWidth: '2' }}
              />
            )
          }
        })}
      </svg>

      {data.values[0] > 0 && (
        <Img
          src="/images/disc/mark-d.png"
          className={styles.mark}
          style={{ top: `${markTopDistances[0]}px`, left: `${markLeftDistances[0]}px` }}
        />
      )}
      {data.values[1] > 0 && (
        <Img
          src="/images/disc/mark-i.png"
          className={styles.mark}
          style={{ top: `${markTopDistances[1]}px`, left: `${markLeftDistances[1]}px` }}
        />
      )}
      {data.values[2] > 0 && (
        <Img
          src="/images/disc/mark-s.png"
          className={styles.mark}
          style={{ top: `${markTopDistances[2]}px`, left: `${markLeftDistances[2]}px` }}
        />
      )}
      {data.values[3] > 0 && (
        <Img
          src="/images/disc/mark-c.png"
          className={styles.mark}
          style={{ top: `${markTopDistances[3]}px`, left: `${markLeftDistances[3]}px` }}
        />
      )}

      {data.values[0] <= 0 && (
        <Img
          src="/images/disc/dot-d.png"
          className={styles.dot}
          style={{ top: `${markTopDistances[0]}px`, left: `${dotLeftDistances[0]}px` }}
        />
      )}
      {data.values[1] <= 0 && (
        <Img
          src="/images/disc/dot-i.png"
          className={styles.dot}
          style={{ top: `${markTopDistances[1]}px`, left: `${dotLeftDistances[1]}px` }}
        />
      )}
      {data.values[2] <= 0 && (
        <Img
          src="/images/disc/dot-s.png"
          className={styles.dot}
          style={{ top: `${markTopDistances[2]}px`, left: `${dotLeftDistances[2]}px` }}
        />
      )}
      {data.values[3] <= 0 && (
        <Img
          src="/images/disc/dot-c.png"
          className={styles.dot}
          style={{ top: `${markTopDistances[3]}px`, left: `${dotLeftDistances[3]}px` }}
        />
      )}

      {(_type || _typeDesc) && (
        <div className={styles.type}>
          {_type && <span className={styles['type-text']}>{_type}</span>}
          {_typeDesc && <span className={styles['type-desc']}>（{_typeDesc}）</span>}
        </div>
      )}
    </div>
  )
}

export default ChartDiscItem
