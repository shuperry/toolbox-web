import { useEffect, FC } from 'react'
import { v1 as uuidv1 } from 'uuid'
import * as echarts from 'echarts/core'
import { ToolboxComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import { ChartBarAndLine as PropType } from '../types'

echarts.use([ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, LineChart, CanvasRenderer])

/**
 * 柱状图3
 *
 * @param {string|number} id 数据的唯一标识符
 * @param {string[]} columnconf X轴横坐标标签
 * @param {'int'|'percent'} [dataType='int'] 数据的展示类型 int：纯数字 percent：百分比
 * @param {number[][]} barData 条形图详细数据
 * @param {number[][]} lineData 折线图详细数据
 * @param {boolean} [legend=true] 是否显示图例
 * @param {string[]} [names] 图例名字列表
 * @param {string[]} [colors=['rgba(68, 185, 121, .4)', '#44B979']] 颜色组，默认['rgba(68, 185, 121, .4)', '#44B979']
 */
const BarAndLine: FC<PropType> = (props) => {
  const {
    id = uuidv1(),
    columnData,
    dataType = 'int',
    barData,
    lineData,
    names,
    colors = ['rgba(68, 185, 121, .4)', '#44B979'],
    legend = true,
  } = props

  const series = [
    ...barData.map((b) => ({
      type: 'bar',
      barWidth: '20px',
      label: {
        show: true,
        position: 'top',
        formatter: dataType === 'percent' ? '{c}%' : '{c}',
      },
      data: b,
    })),
    ...lineData.map((b) => ({
      type: 'line',
      label: {
        show: true,
        position: 'top',
        formatter: dataType === 'percent' ? '{c}%' : '{c}',
      },
      data: b,
    })),
  ]
  if (Array.isArray(names)) {
    series.forEach((s: any, i) => {
      s.name = names[i]
    })
  }

  const option = {
    color: colors,
    xAxis: [
      {
        type: 'category',
        data: columnData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        // min: 0,
        // max: 100,
        // interval: 10,
        axisLabel: {
          formatter: dataType === 'percent' ? '{value}%' : '{value}',
        },
      },
    ],
    series,
    legend: {
      show: !!legend,
      top: null,
      bottom: 0,
      data: names,
    },
  }

  const initChart = () => {
    const chartDom = document.getElementById(`BarAndLine_${id}`) as HTMLElement
    const myChart = echarts.init(chartDom)
    myChart.setOption(option)
  }

  useEffect(() => {
    initChart()
  }, [])

  useEffect(() => {
    initChart()
  }, [props])

  return <div id={`BarAndLine_${id}`} style={{ height: '282px', width: '880px' }}></div>
}

export default BarAndLine
