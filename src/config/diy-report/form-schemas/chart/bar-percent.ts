import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  {
    keyPath: 'title',
    label: '标题',
    dataType: 'string',
    inputType: 'input',
    required: true,
    maxLength: 7,
  },
  {
    keyPath: 'data',
    label: '百分比',
    dataType: 'number',
    required: true,
    min: 0,
    max: 100,
    tip: '数值范围 0 - 100',
  },
]

const defaultData: ReportComponentDataType = {
  type: 'chartBarPercent',
  name: '条形图（按百分比变化颜色）',
  data: 95,
  title: '正确率',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
