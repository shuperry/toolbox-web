import React from 'react'
import { toString } from 'lodash-es'

import Img from '@/components/img'

import styles from './index.less'

const avatarLineConf = [
  {
    range: [1, 20],
    conf: {
      avatarBottom: 0,
      lineHeight: 0,
    },
  },
  {
    range: [21, 21],
    conf: {
      avatarBottom: 5,
      lineHeight: 5,
    },
  },
  {
    range: [22, 22],
    conf: {
      avatarBottom: 10,
      lineHeight: 10,
    },
  },
  {
    range: [23, 23],
    conf: {
      avatarBottom: 15,
      lineHeight: 15,
    },
  },
  {
    range: [24, 24],
    conf: {
      avatarBottom: 20,
      lineHeight: 20,
    },
  },
  {
    range: [25, 25],
    conf: {
      avatarBottom: 25,
      lineHeight: 25,
    },
  },
  {
    range: [26, 26],
    conf: {
      avatarBottom: 30,
      lineHeight: 30,
    },
  },
  {
    range: [27, 27],
    conf: {
      avatarBottom: 35,
      lineHeight: 35,
    },
  },
  {
    range: [28, 28],
    conf: {
      avatarBottom: 40,
      lineHeight: 40,
    },
  },
  {
    range: [29, 29],
    conf: {
      avatarBottom: 45,
      lineHeight: 45,
    },
  },
  {
    range: [30, 30],
    conf: {
      avatarBottom: 50,
      lineHeight: 50,
    },
  },
  {
    range: [31, 31],
    conf: {
      avatarBottom: 60,
      lineHeight: 60,
    },
  },
  {
    range: [32, 32],
    conf: {
      avatarBottom: 65,
      lineHeight: 65,
    },
  },
  {
    range: [33, 33],
    conf: {
      avatarBottom: 75,
      lineHeight: 75,
    },
  },
  {
    range: [34, 34],
    conf: {
      avatarBottom: 80,
      lineHeight: 80,
    },
  },
  {
    range: [35, 35],
    conf: {
      avatarBottom: 90,
      lineHeight: 90,
    },
  },
  {
    range: [36, 36],
    conf: {
      avatarBottom: 95,
      lineHeight: 95,
    },
  },
  {
    range: [37, 37],
    conf: {
      avatarBottom: 100,
      lineHeight: 100,
    },
  },
  {
    range: [38, 39],
    conf: {
      avatarBottom: 105,
      lineHeight: 105,
    },
  },
  {
    range: [40, 42],
    conf: {
      avatarBottom: 110,
      lineHeight: 110,
    },
  },
  {
    range: [43, 46],
    conf: {
      avatarBottom: 115,
      lineHeight: 115,
    },
  },
  {
    range: [47, 55],
    conf: {
      avatarBottom: 120,
      lineHeight: 120,
    },
  },
  {
    range: [56, 60],
    conf: {
      avatarBottom: 110,
      lineHeight: 110,
    },
  },
  {
    range: [61, 62],
    conf: {
      avatarBottom: 105,
      lineHeight: 105,
    },
  },
  {
    range: [63, 63],
    conf: {
      avatarBottom: 100,
      lineHeight: 100,
    },
  },
  {
    range: [64, 64],
    conf: {
      avatarBottom: 95,
      lineHeight: 95,
    },
  },
  {
    range: [65, 65],
    conf: {
      avatarBottom: 90,
      lineHeight: 90,
    },
  },
  {
    range: [66, 66],
    conf: {
      avatarBottom: 80,
      lineHeight: 80,
    },
  },
  {
    range: [67, 67],
    conf: {
      avatarBottom: 75,
      lineHeight: 75,
    },
  },
  {
    range: [68, 68],
    conf: {
      avatarBottom: 70,
      lineHeight: 70,
    },
  },
  {
    range: [69, 69],
    conf: {
      avatarBottom: 65,
      lineHeight: 65,
    },
  },
  {
    range: [70, 70],
    conf: {
      avatarBottom: 55,
      lineHeight: 55,
    },
  },
  {
    range: [71, 71],
    conf: {
      avatarBottom: 50,
      lineHeight: 50,
    },
  },
  {
    range: [72, 72],
    conf: {
      avatarBottom: 45,
      lineHeight: 45,
    },
  },
  {
    range: [73, 73],
    conf: {
      avatarBottom: 40,
      lineHeight: 40,
    },
  },
  {
    range: [74, 74],
    conf: {
      avatarBottom: 35,
      lineHeight: 35,
    },
  },
  {
    range: [75, 75],
    conf: {
      avatarBottom: 30,
      lineHeight: 30,
    },
  },
  {
    range: [76, 76],
    conf: {
      avatarBottom: 25,
      lineHeight: 25,
    },
  },
  {
    range: [77, 77],
    conf: {
      avatarBottom: 20,
      lineHeight: 20,
    },
  },
  {
    range: [78, 78],
    conf: {
      avatarBottom: 15,
      lineHeight: 15,
    },
  },
  {
    range: [79, 79],
    conf: {
      avatarBottom: 10,
      lineHeight: 10,
    },
  },
  {
    range: [80, 80],
    conf: {
      avatarBottom: 5,
      lineHeight: 5,
    },
  },
  {
    range: [81, 100],
    conf: {
      avatarBottom: 0,
      lineHeight: 0,
    },
  },
]

const getConfByData = (data) => {
  return avatarLineConf.find(
    (item) =>
      item.range[0] <= Number(toString(data).replace('%', '')) &&
      Number(toString(data).replace('%', '')) <= item.range[1],
  ).conf
}

/**
 * 面积图.
 *
 * @param {string} title 标题.
 * @param {string} data 数值, e.g: 75 或 75%.
 */
export default function Area({ title = '', data = '' }) {
  if (!data) {
    return null
  }

  const percentData = toString(data).lastIndexOf('%') === -1 ? `${data}%` : data

  return (
    <div className={styles.wraper}>
      <div className={styles.wrap}>
        <div className={styles.title2}>
          <span>{title}</span>
        </div>

        <div className={styles.area}>
          <Img className={styles.back1} src="/images/area/areaLine1.png" alt="" />
          <div className={styles['blank-wrap']}>
            <div className={styles.blank} style={{ left: percentData }} />
          </div>
          <Img className={styles.back2} src="/images/area/areaLine2.png" alt="" />
          <div className={styles['markLine-wrap']}>
            <div
              className={styles.markLine}
              style={{ left: percentData, height: `${getConfByData(data).lineHeight}px` }}
            >
              <Img src="/images/area/avatar.svg" style={{ bottom: `${getConfByData(data).avatarBottom}px` }} />
              <span className={styles.desc}>你的位置</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
