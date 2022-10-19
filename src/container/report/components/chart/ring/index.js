import React from 'react'

import { Rose } from '@ant-design/charts'
import Img from '@/components/img'

import styles from './index.less'

// 5种颜色
const colors = ['#FD6E49', '#FD9B40', '#FCC644', '#7CD762', '#44B979']

const Charts = ({ data, ratio, charcater }) => {
  if (data.length === 0) return null
  // 底图
  const backData = [
    {
      label: '1',
      value: 100,
    },
    {
      label: '2',
      value: 100,
    },
    {
      label: '3',
      value: 100,
    },
    {
      label: '4',
      value: 100,
    },
    {
      label: '5',
      value: 100,
    },
    {
      label: '6',
      value: 100,
    },
  ]

  // 5种颜色
  const color = data.map((item) => {
    if (item.value <= 27) {
      return colors[0]
    }

    if (item.value <= 49) {
      return colors[1]
    }

    if (item.value <= 76) {
      return colors[2]
    }
    if (item.value <= 93) {
      return colors[3]
    }

    return colors[4]
  })

  // 底图
  const backConfig = {
    data: backData,
    width: 480,
    height: 480,
    xField: 'label',
    yField: 'value',
    seriesField: 'label',
    color,
    meta: {
      label: {
        formatter: () => '',
      },
    },
    radius: 1,
    innerRadius: 0.2,
    legend: false,
    animation: false,
  }

  const config = {
    data,
    width: 460,
    height: 460,
    xField: 'index',
    yField: 'value',
    seriesField: 'index',
    color,
    label: {
      offset: -25,
      autoRotate: false,
      layout: 'fixedOverlap',
      style: {
        fill: 'white',
        fontSize: 22,
      },
      formatter: (a, b, index) => {
        if (a.value < 20) {
          switch (index) {
            case 0:
              b.y = b.y - 35
              break
            case 1:
              b.x = b.x + 40
              b.y = b.y - 20
              break
            case 2:
              b.x = b.x + 40
              b.y = b.y + 20
              break
            case 3:
              b.y = b.y + 35
              break
            case 4:
              b.x = b.x - 40
              b.y = b.y + 20
              break
            case 5:
              b.x = b.x - 40
              b.y = b.y - 20
              break

            default:
              break
          }
        }

        return a.value + '%'
      },
    },
    radius: 1,
    innerRadius: 0.2,
    // legend: { position: 'bottom' },
    legend: false,
    animation: false,
  }

  return (
    <div className={styles.wrap}>
      <div className={styles['chart-wrap']}>
        <div className={styles.chart}>
          <div className={styles.zIndex1}>
            <Rose {...backConfig} />
          </div>
          <Img className={styles.zIndex2} src="/images/report/rose-back.png" />
          <div className={styles.zIndex3}>
            <Rose {...config} />
          </div>
          <Img className={styles.zIndex4} src="/images/report/rose-pie.png" />
          <Img className={styles.zIndex5} src="/images/report/rose-line.png" />
          <div className={styles.zIndex6}>
            综合水平
            <b>{ratio}%</b>
          </div>
        </div>
      </div>
      <div className={styles.footer}>细心指数：60%</div>
    </div>
  )
}

export default Charts
