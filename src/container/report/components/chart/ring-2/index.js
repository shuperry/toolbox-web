import React from 'react'
import classnames from 'classnames'

import { Rose } from '@ant-design/charts'
import Img from '@/components/img'
import styles from './index.less'

// 饼块颜色.
const colors = ['#FD6E49', '#FD9B40', '#FCC644', '#7CD762', '#44B979']
const labelBgColors = ['#FFEBE6', '#FFEED8', '#FFFAEC', '#F5FBEE', '#EDF9F5']

const lineXys = [
  { x2: 260, y2: 0, width: '518px', height: '515px', left: '-18px', top: '-14px' },
  { x2: 600, y2: 60, width: '518px', height: '500px', left: '-26px', top: '0' },
  { x2: 600, y2: 440, width: '518px', height: '500px', left: '-25px', top: '0' },
  { x2: 0, y2: 0, width: '', height: '', left: '', top: '0' },
  { x2: 0, y2: 390, width: '448px', height: '500px', left: '-12px', top: '0' },
  { x2: 0, y2: 101, width: '448px', height: '500px', left: '-12px', top: '0' },
]
const dotXys = [
  { x: 260, y: 0 },
  { x: 600, y: 60 },
  { x: 600, y: 440 },
  { x: 0, y: 0 },
  { x: 0, y: 390 },
  { x: 0, y: 100 },
]

const Charts = ({ data, ratio, charcater }) => {
  if (data.length === 0) return null

  // 饼块颜色.
  const color = data.map((item) => {
    if (item.value <= 15) {
      return colors[0]
    }

    if (item.value <= 34) {
      return colors[1]
    }

    if (item.value <= 65) {
      return colors[2]
    }
    if (item.value <= 85) {
      return colors[3]
    }

    return colors[4]
  })

  // 饼块颜色.
  const labelBgColor = data.map((item) => {
    if (item.value <= 15) {
      return labelBgColors[0]
    }

    if (item.value <= 34) {
      return labelBgColors[1]
    }

    if (item.value <= 65) {
      return labelBgColors[2]
    }
    if (item.value <= 85) {
      return labelBgColors[3]
    }

    return labelBgColors[4]
  })

  const config = {
    data,
    width: 460,
    height: 460,
    xField: 'index',
    yField: 'value',
    seriesField: 'index',
    color,
    label: {
      formatter: () => {
        return ''
      },
    },
    interactions: [{ type: 'tooltip', enable: false }],
    radius: 1,
    innerRadius: 0.2,
    legend: false,
    animation: false,
  }

  return (
    <div className={styles.wrap}>
      <div className={styles['chart-wrap']}>
        <div className={styles.chart}>
          <Img className={styles.zIndex2} src="/images/report/ring-2-back.png" />

          <div className={styles.zIndex3}>
            <Rose {...config} />
          </div>
          <Img className={styles.zIndex4} src="/images/report/ring-2-line.png" />
          <Img className={styles.zIndex5} src="/images/report/ring-2-pie.png" />

          <div className={styles.zIndex6}>
            综合水平
            <b>{ratio}%</b>
          </div>

          <div className={styles.labels}>
            {data.map((item, index) => {
              // 下载报告有样式问题,特殊处理
              if (index === 3) {
                return null
              }
              return (
                <>
                  <div
                    className={styles[`item${index + 1}`]}
                    key={`${index}`}
                    style={{ backgroundColor: labelBgColor[index] }}
                  >
                    <div className={styles.label}>{item.label}</div>
                    <div className={styles.desc}>
                      超过
                      <div
                        style={{
                          color: color[index],
                          width: '52px',
                          fontWeight: 'bold',
                          display: 'inline-block',
                        }}
                      >
                        {item.value}%
                      </div>
                      的同龄人
                    </div>
                  </div>

                  <svg
                    className={styles.line}
                    key={`lines-${index}`}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: lineXys[index].width,
                      height: lineXys[index].height,
                      left: lineXys[index].left,
                      top: lineXys[index].top,
                    }}
                  >
                    <line
                      key={`line-${index}`}
                      x1={260}
                      y1={240}
                      x2={lineXys[index].x2}
                      y2={lineXys[index].y2}
                      style={{ stroke: color[index], strokeWidth: '1' }}
                    />
                  </svg>

                  <div
                    className={classnames(styles.dot, styles[`dot-${index}`])}
                    style={{
                      backgroundColor: color[index],
                    }}
                  ></div>
                </>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles['percent-lebel']}>百分等级</div>
      <div className={styles.footer}>{charcater}</div>
    </div>
  )
}

export default Charts
