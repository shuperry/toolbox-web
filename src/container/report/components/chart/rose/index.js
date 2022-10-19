import React from 'react'
import { Rose } from '@ant-design/charts'

import Img from '@/components/img'
// import Icon from '@/component/Icon';

import styles from './index.less'

// 颜色
const colors = ['#FF6463', '#FF8700', '#FFC600', '#44B979']

const getColor = (value) => {
  if (value <= 40) {
    return colors[0]
  }

  if (value <= 59) {
    return colors[1]
  }

  if (value <= 75) {
    return colors[2]
  }

  return colors[3]
}

/**
 * 玫瑰图
 */
const Charts = ({ data }) => {
  if (data.length === 0) return null
  let max = 0
  data.forEach((item) => {
    if (item.value > max) {
      max = item.value
    }
  })

  const color = data.map((item) => getColor(item.value))

  const config = {
    data,
    width: 480,
    height: 480,
    xField: 'index',
    yField: 'value',
    seriesField: 'index',
    // xAxis: {
    //   line: {
    //     style: { lineWidth: 0 },
    //   },
    // },
    legend: false,
    color,
    label: {
      offset: -25,
      autoRotate: false,
      layout: 'fixedOverlap',
      style: {
        fill: '#fff',
        fontSize: 16,
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
    meta: {
      index: {
        formatter: (index) => `${data[index].value}%`,
      },
    },
    // radius: 1,
    radius: max * 0.01,
    innerRadius: 0.1,
    animation: false,
  }

  return (
    <div className={styles.chart}>
      <div className={styles.main}>
        <div className={styles.wrap}>
          <Img className={styles.zIndex2} src="/images/report/rose2-back.png" />
          <div className={styles.zIndex3}>
            <Rose {...config} />
          </div>
          <Img className={styles.zIndex5} src="/images/report/rose2-line.png" />
          <div className={styles.zIndex6}></div>

          <div className={styles.labels}>
            {data.map((item, index) => {
              // 下载报告有样式问题,特殊处理
              if (index === 3) {
                return null
              }
              return (
                <div className={styles[`item${index + 1}`]} key={`${index}`}>
                  <div className={styles.label}>{item.label}</div>
                  <div className={styles.desc}>
                    超过 <b style={{ color: color[index] }}>{item.value}%</b> 的同龄人
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.labels}>
          {data.map((item, index) => {
            if (index !== 3) {
              return null
            }
            return (
              <div className={styles[`item${index + 1}`]} key={`${index}`}>
                <div className={styles.label}>{item.label}</div>
                <div className={styles.desc}>
                  超过 <b style={{ color: color[index] }}>{item.value}%</b> 同龄人
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Charts
