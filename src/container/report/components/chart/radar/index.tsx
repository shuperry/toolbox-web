import { FC, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'

import * as echarts from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import { TooltipComponent, LegendComponent, MarkLineComponent } from 'echarts/components'

import { ChartRadarPropType } from '../types'

import styles from './index.less'

echarts.use([TooltipComponent, RadarChart, CanvasRenderer, LegendComponent, MarkLineComponent])

// 高宽比.
const aspectRatio = 600 / 800

// 默认分割区域颜色.
const defSplitAreaColor = '#FFF'

// 默认分割线颜色.
const defSplitLineColor = '#ECECEC'

// 默认坐标线颜色.
const defAxisLineColor = '#ECECEC'

// 默认数据名称说明分隔字符串.
const defNameDescSeperator = '{value}'

// 默认数据名称说明.
const defNameDesc = '超过{value}的同龄人'

const isBoolean = (obj: any) => obj === true || obj === false

// 组装图标配置.
const genChartOption = ({
  data,
  dataType,
  max,
  shape,
  colors,
  names,
  showTick,
  showLegend,
  legends,
}: ChartRadarPropType) => {
  const percentChat = dataType === 'percent' ? '%' : ''
  const isPercent = dataType === 'percent'

  const nameValues = {}
  ;(names || []).forEach((item, idx) => {
    nameValues[item.name] = {
      show: isBoolean(item.showDesc) ? item.showDesc : true,
      desc: item.desc || '',
      val: data[0][idx],
    }
  })

  return {
    legend: {
      show: showLegend,
      data: legends || [],
      itemHeight: 6,
      itemWidth: 6,
      icon: 'circle',
      bottom: 0,
      top: null,
      padding: [0, 10, 0, 10],
    },
    color: colors,
    radar: {
      shape,
      radius: '60%',
      name: {
        formatter(name: string) {
          const nameValConf = nameValues[name]
          const desc = nameValConf.desc || defNameDesc

          if (nameValConf.show) {
            return [
              name.includes('{') ? `${name}\n` : `{title|${name}}\n`,
              `{grey|${desc.substring(0, desc.indexOf(defNameDescSeperator))}}`,
              `{green|${nameValConf.val}${percentChat}}`,
              `{grey|${desc.substring(desc.indexOf(defNameDescSeperator) + defNameDescSeperator.length)}}`,
            ].join('')
          }

          return name.includes('{') ? name : `{title|${name}}`
        },
        rich: {
          title: {
            fontSize: 16,
            color: '#1e1e1e',
            fontWeight: 500,
          },
          grey: {
            fontSize: 13,
            color: '#7C7C7C',
            fontWeight: 400,
          },
          green: {
            fontSize: 17,
            color: '#44B979',
            fontWeight: 800,
            lineHeight: 35,
            padding: [0, 5],
          },
        },
      },
      indicator: (names || []).map((v, i) => ({
        name: v.name,
        axisLabel: {
          show: i === 0 ? showTick : false,
          margin: -40,
          color: '#272727',
          formatter(value: string | number) {
            return isPercent ? `${value}%` : value
          },
        },
        ...(isPercent ? { max: 100 } : { max }),
      })),
      splitArea: {
        areaStyle: {
          color: defSplitAreaColor,
        },
      },
      splitLine: {
        lineStyle: {
          color: defSplitLineColor,
        },
      },
      axisLine: {
        lineStyle: {
          color: defAxisLineColor,
        },
      },
    },
    series: data.map((_, idx) => ({
      name: (legends || [])[idx] || '',
      type: 'radar',
      symbolSize: 6,
      lineStyle: {
        width: 1,
      },
      data: [
        {
          value: data[idx],
          name: (legends || [])[idx] || '',
          areaStyle: {
            opacity: 0.1,
          },
          label: {
            show: !showTick,
            formatter(params: { [key: string]: any }) {
              return `{percent|${params.value}${percentChat}}`
            },
            rich: {
              percent: {
                color: (colors || [])[idx],
              },
            },
          },
        },
      ],
    })),
  }
}

/**
 * @param {number[][]} data 图表要渲染的数据.
 * @param {'number' | 'percent'} dataType 数据显示类型, 支持数字或百分比.
 * @param {number} max 数据值为数字时最大刻度值.
 * @param {'circle' | 'polygon'} shape 雷达形状, 支持: circle (圆形), polygon (多边形).
 * @param {string[]} colors 雷达图块颜色值, 默认: ['#44B979', '#FFBA15'].
 * @param {{ name: string; showDesc?: boolean, desc?: string; }[]} names 每一个雷达代表的数据名称.
 * @param {boolean} [showTick = false] 是否显示刻度数据.
 * @param {boolean} [showLegend = true] 是否显示图例.
 * @param {string[]} legends 图例名称.
 */
const ChartRadar: FC<ChartRadarPropType> = ({
  containerId = uuidv1(),
  title = '',
  data = [],
  dataType = 'percent',
  max,
  shape = 'circle',
  colors = ['#44B979', '#FFBA15'],
  names = [],
  showTick = false,
  showLegend = true,
  legends = [],
}) => {
  const height = 400

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const container = document.getElementById(`Radar_${containerId}`) as HTMLElement
      const chart = echarts.init(container)
      chart.setOption(genChartOption({ data, dataType, max, shape, colors, names, showTick, showLegend, legends }))
    }
  }, [])

  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!Array.isArray(data) || !data.length) return <></>

  return (
    <div className={styles['chart-radar-container']}>
      {title && (
        <div className={styles['title-container']}>
          <span className={styles.title}>{title}</span>
        </div>
      )}
      <div
        id={`Radar_${containerId}`}
        style={{ width: `${height / aspectRatio}px`, height: `${height}px`, margin: '0 auto' }}
      ></div>
    </div>
  )
}

export default ChartRadar
