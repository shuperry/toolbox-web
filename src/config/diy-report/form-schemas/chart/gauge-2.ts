import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  {
    keyPath: 'data.text',
    label: '下方文案',
    dataType: 'string',
    tip: '表示将要被替换成百分比数字的标记, 请保留此标记',
    required: true,
    maxLength: 30,
  },
  {
    keyPath: 'data.value',
    label: '百分比',
    dataType: 'number',
    required: true,
    min: 0,
    max: 100,
    tip: '数值范围 0 - 100',
  },
]

const defaultData: ReportComponentDataType = {
  type: 'chartGauge2',
  name: '仪表图',
  data: {
    value: 85,
    text: '你的音准模唱表现：优秀',
  },
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
