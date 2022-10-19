import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'data', label: '文字', dataType: 'string[]', required: true, allowAdd: true, allowRemove: true },
]

const defaultData: ReportComponentDataType = {
  type: 'textSpecialWithDot',
  name: '绿点正文',
  data: ['成长型心态', '超过 65% 的同龄人'],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
