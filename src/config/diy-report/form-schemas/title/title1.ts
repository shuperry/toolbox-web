import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'num', label: '数字', dataType: 'number', required: true, min: 1, max: 99 },
  { keyPath: 'title', label: '标题文字', dataType: 'string', required: true },
]

const defaultData: ReportComponentDataType = {
  type: 'title1',
  num: 1,
  name: '一级标题',
  title: '学生总体诊断结果',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
