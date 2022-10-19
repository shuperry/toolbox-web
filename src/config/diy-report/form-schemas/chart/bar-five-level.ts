import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '上方标题', dataType: 'string', inputType: 'input', maxLength: 4, required: true },
  { keyPath: 'data', label: '等级', dataType: 'number', required: true, min: 1, max: 5, tip: '数值范围 1 - 5' },
]

const defaultData: ReportComponentDataType = {
  type: 'chartBarFiveLevel',
  name: '五级条形图',
  title: '学业探讨',
  data: 4,
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
