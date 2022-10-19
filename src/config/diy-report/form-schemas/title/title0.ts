import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [{ keyPath: 'title', label: '标题文字', dataType: 'string', required: true }]

const defaultData: ReportComponentDataType = {
  type: 'title0',
  name: '大标题',
  title: 'MECE学习力诊断报告',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
