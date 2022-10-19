import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  {
    keyPath: 'data',
    label: '百分比',
    dataType: 'number[]',
    required: true,
    min: 0,
    max: 100,
    minSize: 5,
    allowAdd: false,
    tip: '数值范围 0 - 100',
  },
]

const defaultData: ReportComponentDataType = {
  type: 'chartHierarchical',
  name: '马斯洛需求层次模型图',
  data: [90, 30, 50, 47, 50],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
