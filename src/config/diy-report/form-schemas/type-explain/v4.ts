import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '上方标题', dataType: 'string', required: true },
  { keyPath: 'data', label: '下方正文', dataType: 'string[]', required: true, allowAdd: true, allowRemove: true },
]

const defaultData: ReportComponentDataType = {
  type: 'typeExplain4',
  name: '类型说明4',
  title: 'ENFP 型人',
  data: ['性格亮点：天下没有不可能的事的公关型', '性格标签：热情自信，富有创造力，洞察力强，具有魅力%的同龄人'],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
