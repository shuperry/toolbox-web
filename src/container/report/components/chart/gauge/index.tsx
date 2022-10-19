import { FC, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import classnames from 'classnames'
import { isObject, isNumber } from 'lodash-es'

import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import Img from '@/components/img'

import { ChartGaugePropType } from '../types'

import styles from './index.less'

echarts.use([GaugeChart, CanvasRenderer])

const colors = ['#FD6E49', '#FFAD44', '#FFCD44', '#7CD762', '#44B979']

// 数值区间与颜色映射表.
const colorTypeConf = {
  red: {
    color: colors[0],
    range: [0, 15],
  },
  orange: {
    color: colors[1],
    range: [16, 34],
  },
  yellow: {
    color: colors[2],
    range: [35, 65],
  },
  green: {
    color: colors[3],
    range: [66, 85],
  },
  'dark-green': {
    color: colors[4],
    range: [86, 100],
  },
}

const getColorByVal = (val: number): string => {
  for (let i = 0, k, colorRange; i < Object.keys(colorTypeConf).length; i++) {
    k = Object.keys(colorTypeConf)[i]
    colorRange = colorTypeConf[k].range

    if (colorRange[0] <= val && val <= colorRange[1]) {
      return k
    }
  }

  return ''
}

// 高宽比.
const aspectRatio = 226 / 452

// 组装图标配置.
const genChartOption = ({ data }: ChartGaugePropType) => {
  return {
    series: [
      {
        type: 'gauge',
        radius: '150%',
        center: [375, 300],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.15, colors[0]],
              [0.34, colors[1]],
              [0.65, colors[2]],
              [0.85, colors[3]],
              [1, colors[4]],
            ],
          },
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-37%'],
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5,
          },
        },
        axisLabel: {
          show: false,
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 30,
        },
        detail: {
          fontSize: 40,
          offsetCenter: [0, '-5%'],
          valueAnimation: true,
          formatter(value: number) {
            return Math.round(value * 100) + '%'
          },
          color: 'auto',
        },
        data: [
          {
            value: data.value / 100,
            name: '',
          },
        ],
      },
    ],
  }
}

/**
 * 仪表图.
 *
 * 单组数据, 颜色分为五档, 刻度: 15%、34%、65%、85%、100%.
 *
 * @param {{ value: number; text: string; }} data 图表要渲染的数据, value 为 0 - 100.
 */
const ChartGauge: FC<ChartGaugePropType> = (props) => {
  const { containerId = uuidv1(), data = { value: 0, text: '' } } = props

  const height = 380

  const initChart = () => {
    const container = document.getElementById(`Gauge_${containerId}`) as HTMLElement
    const chart = echarts.init(container)
    chart.setOption(genChartOption({ data }))
  }

  useEffect(() => {
    if (isObject(data)) {
      initChart()
    }
  }, [])

  useEffect(() => {
    initChart()
  }, [props])

  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!isObject(data) || !isNumber(data.value)) return <></>

  const _numberText = `${data.value}%`
  const textArr = (data.text || '').split('{value}')
  const hasNumberText = (data.text || '').indexOf('{value}') > -1

  return (
    <div className={styles['gauge-chart-wrapper']}>
      <Img src="/images/gauge/mark.png" className={styles['mark-bg']} />

      <div
        id={`Gauge_${containerId}`}
        className={styles['gauge-chart-container']}
        style={{ width: `${height / aspectRatio}px`, height: `${height}px` }}
      ></div>

      {data.text && (
        <div className={styles['mark-text']}>
          <span className={styles['c-black']}>{textArr[0]}</span>
          {hasNumberText && (
            <span className={classnames(styles['c-number'], styles['mx-10'], styles[`c-${getColorByVal(data.value)}`])}>
              {_numberText}
            </span>
          )}
          {textArr.length > 1 && <span className={styles['c-black']}>{textArr[1]}</span>}
        </div>
      )}
    </div>
  )
}

export default ChartGauge
