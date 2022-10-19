import { FC, useEffect } from 'react'
import classnames from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { isObject } from 'lodash-es'

import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import { ChartCareerAnchorDiffPropType } from '../types'

import styles from './index.less'

echarts.use([BarChart, CanvasRenderer])

// 颜色.
const colors = ['#44B979', '#FF6900']

const genSplitData = (vals: number[]) => {
  const data1 = Array(vals.length).fill(0)
  const data2 = Array(vals.length).fill(0)

  vals.forEach((v, i) => {
    if (v >= 0) {
      data1[i] = v
      data2[i] = 0
    } else {
      data1[i] = 0
      data2[i] = v
    }
  })

  return { data1, data2 }
}

// 组装图标配置.
const genChartOption = ({ data }: ChartCareerAnchorDiffPropType) => {
  const { data1, data2 } = genSplitData(data.values)

  return {
    color: colors,
    width: 700,
    height: 135,
    grid: {
      top: 20,
      left: 50,
    },
    xAxis: {
      data: data.labels,
      axisLabel: {
        margin: 20,
        interval: 0,
        rotate: 45,
        color: '#272727',
        fontSize: 16,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#CCCCCC',
        },
      },
      axisTick: {
        show: true,
        length: 14,
        lineStyle: {
          color: '#CCCCCC',
        },
      },
    },
    yAxis: {
      axisLabel: {
        color: '#C4C4C4',
        fontSize: 16,
      },
    },
    series: [
      {
        name: 'bar1',
        type: 'bar',
        stack: 'same',
        barWidth: 40,
        data: data1,
        label: {
          show: true,
          position: 'top',
          color: colors[0],
          fontSize: 16,
          formatter({ value, dataIndex }: { value: number; dataIndex: number }) {
            return value >= 0 && data2[dataIndex] === 0 ? value : ''
          },
        },
      },
      {
        name: 'bar2',
        type: 'bar',
        stack: 'same',
        barWidth: 40,
        data: data2,
        label: {
          show: true,
          position: 'top',
          color: colors[1],
          fontSize: 16,
          formatter({ value }: { [key: string]: any }) {
            return value < 0 ? value : ''
          },
        },
      },
    ],
  }
}

/**
 * @param {{ title?: string; values: number[]; labels: string[] }} data 图表要渲染的数据.
 */
const CareerAnchorDiff: FC<ChartCareerAnchorDiffPropType> = ({ containerId = uuidv1(), data }) => {
  useEffect(() => {
    if (isObject(data)) {
      const container = document.getElementById(`CareerAnchorDiff_${containerId}`) as HTMLElement
      const chart = echarts.init(container)
      chart.setOption(genChartOption({ data }))
    }
  }, [])

  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!isObject(data)) return <></>

  return (
    <div className={styles['chart-career-anchor-diff-container']}>
      {data.title && <div className={styles['title-container']}>{data.title}</div>}
      <div id={`CareerAnchorDiff_${containerId}`} style={{ width: `770px`, height: `250px`, margin: '0 auto' }}></div>
      <div className={styles['tip-container']}>
        <div className={styles.tip}>
          绿色含义：当该类型数字越大，则代表<span className={styles.bold}>是</span>
          该类型的特征越突出；
        </div>
        <div className={classnames(styles.tip, styles.indent)}>
          红色含义：当该类型数字越小，则代表<span className={styles.bold}>不是</span>
          该类型的特征越突出。
        </div>
      </div>
    </div>
  )
}

export default CareerAnchorDiff
