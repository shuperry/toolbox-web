import React, { useEffect, FC } from 'react'
import { CharBar as PropType } from '../types'
import * as echarts from 'echarts/core'
import { TooltipComponent, GridComponent, LegendComponent, MarkLineComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer, LegendComponent, MarkLineComponent])

/**
 * 柱状图1
 *
 * @param {string|number} id 数据的唯一标识符
 * @param {string[]} columnData X轴横坐标标签
 * @param {'int'|'percent'} [dataType='int'] 数据的展示类型 int：纯数字 percent：百分比
 * @param {number[][]} data 详细数据
 * @param {boolean} [legend=false] 是否显示图例
 * @param {string[]} [names] 图例名字列表
 * @param {number[]} [markLine] 分割线
 * @param {string[]} [colors=['#44B979', '#FFBA15']] 颜色组，默认['#44B979', '#FFBA15']
 */
const ChartsBar: FC<PropType> = ({
  id,
  columnData,
  dataType = 'int',
  data,
  names,
  legend = false,
  markLine,
  colors = ['#44B979', '#FFBA15'],
}) => {
  const series: any = (data || []).map((d, i) => ({
    type: 'bar',
    name: Array.isArray(names) ? names[i] : undefined,
    barWidth: '20px',
    label: {
      show: data && data.length === 1,
      position: 'top',
      formatter: dataType === 'percent' ? '{c}%' : '{c}',
    },
    data: d,
  }))
  if (Array.isArray(markLine)) {
    series[0].markLine = {
      data: markLine.map((l, i) => ({
        lineStyle: { color: colors[i] },
        yAxis: l,
      })),
    }
  }
  const option = {
    color: colors,
    grid: {
      left: '40px',
      right: '40px',
      bottom: '40px',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: columnData,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: dataType === 'percent' ? '{value}%' : '{value}',
        },
      },
    ],
    series: [...series],
    legend: [
      {
        show: legend,
        data: names,
        itemHeight: 12,
        itemWidth: 12,
        icon: 'circle',
        top: null,
        bottom: 0,
      },
    ],
  }
  useEffect(() => {
    if (Array.isArray(data)) {
      const chartDom = document.getElementById(`Bar_${id}`) as HTMLElement
      const myChart = echarts.init(chartDom)
      myChart.setOption(option)
    }
  }, [])
  // 异常情况出处理
  if (!Array.isArray(data)) {
    return <></>
  } else {
    return <div id={`Bar_${id}`} style={{ height: '282px', width: '880px' }}></div>
  }
}

export default ChartsBar
