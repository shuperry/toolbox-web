import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [{ keyPath: 'title', label: '标题文字', dataType: 'string', required: true }]

const defaultData: ReportComponentDataType = {
  type: 'title3',
  name: '三级标题',
  title: '学习动力',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
