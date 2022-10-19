import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '上方标题', dataType: 'string', required: true },
  { keyPath: 'data', label: '百分比', dataType: 'number', required: true, min: 0, max: 100, tip: '数值范围 0 - 100' },
]

const defaultData: ReportComponentDataType = {
  type: 'chartArea',
  name: '曲线图',
  data: '37',
  title: '超过37%的同龄人',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
