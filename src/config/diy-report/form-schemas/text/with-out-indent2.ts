import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'data', label: '文字', dataType: 'string[]', required: true, allowAdd: true, allowRemove: true },
]

const defaultData: ReportComponentDataType = {
  type: 'textWithoutIndent2',
  name: '未缩进正文',
  data: [
    '增强学习意愿：你学习意愿的程度不强，可能是因为你没有深刻生的挫败情绪。',
    '增强学习意愿：你学习意愿的程度不强，可能是因为你没有深刻生的挫败情绪。',
  ],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
