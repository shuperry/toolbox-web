import { getDvaApp } from 'umi'
import { get } from 'lodash-es'

import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const store = getDvaApp()._store
// const currFormVal: any = store.getState()['diyReport'].currFormVal

const schema: FormJsonSchemaType[] = [
  {
    keyPath: 'dataType',
    label: '数值形式',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '数字', value: 'int' },
      { label: '百分比', value: 'percent' },
    ],
    defaultValue: 'percent',
    required: true,
  },
  {
    keyPath: 'columnData',
    label: '数据维度',
    tip: '用于显示在横坐标轴',
    dataType: 'string[]',
    inputType: 'input',
    required: true,
    allowAdd: true,
    allowRemove: true,
    maxSize: 8,
  },
  {
    keyPath: 'barData',
    label: '柱状图数据',
    dataType: 'number[]',
    required: true,
    allowAdd: true,
    allowRemove: true,
    maxSize: 8,
    getDefaultValue: (_currFormVal) => {
      const val = get(_currFormVal, 'barData') || []

      return val.length > 0 ? val[0] : []
    },
    setValueInterceptor: (val, dataType, idx) => {
      if (dataType === 'currFormVal') {
        store.dispatch({
          type: 'diyReport/changeCurrFormValByFieldPath',
          payload: {
            fieldPath: `barData[0][${idx}]`,
            val,
          },
        })
      } else if (dataType === 'components') {
        store.dispatch({
          type: 'diyReport/changeComponentDataByFieldPath',
          payload: {
            fieldPath: `barData[0][${idx}]`,
            val,
          },
        })
      }
    },
    removeValueInterceptor: (idx) => {
      store.dispatch({
        type: 'diyReport/removeArrItemForArrField',
        payload: {
          fieldPath: `barData[0]`,
          idx,
        },
      })
    },
  },
  {
    keyPath: 'lineData',
    label: '拆线图数据',
    dataType: 'number[]',
    required: true,
    allowAdd: true,
    allowRemove: true,
    maxSize: 8,
    getDefaultValue: (_currFormVal) => {
      const val = get(_currFormVal, 'lineData') || []
      return val.length > 0 ? val[0] : []
    },
    setValueInterceptor: (val, dataType, idx) => {
      if (dataType === 'currFormVal') {
        store.dispatch({
          type: 'diyReport/changeCurrFormValByFieldPath',
          payload: {
            fieldPath: `lineData[0][${idx}]`,
            val,
          },
        })
      } else if (dataType === 'components') {
        store.dispatch({
          type: 'diyReport/changeComponentDataByFieldPath',
          payload: {
            fieldPath: `lineData[0][${idx}]`,
            val,
          },
        })
      }
    },
    removeValueInterceptor: (idx) => {
      store.dispatch({
        type: 'diyReport/removeArrItemForArrField',
        payload: {
          fieldPath: `lineData[0]`,
          idx,
        },
      })
    },
  },
  {
    keyPath: 'names',
    label: '图例',
    dataType: 'string[]',
    inputType: 'input',
    tip: '用于显示在底部的图例',
    required: true,
    allowAdd: false,
    allowRemove: false,
    maxSize: 2,
  },
  {
    keyPath: 'legend',
    label: '是否显示图例',
    dataType: 'boolean',
  },
]

const defaultData: ReportComponentDataType = {
  type: 'chartBarAndLine',
  name: '柱状图3',
  id: '003',
  columnData: ['学习意愿', '动力持续力'],
  dataType: 'percent',
  names: ['超越同龄人', '平均温度'],
  barData: [[62, 39]],
  lineData: [[80, 76]],
  legend: true,
}

export { schema, defaultData }
