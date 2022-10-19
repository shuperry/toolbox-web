import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '上方标题', dataType: 'string', required: true },
  { keyPath: 'data', label: '下方正文', dataType: 'string[]', required: true, allowAdd: true, allowRemove: true },
]

const defaultData: ReportComponentDataType = {
  type: 'typeExplain2',
  name: '类型说明2',
  title: '学习意愿',
  data: [
    '开朗外向，善于沟通，灵活变通，',
    '你的也能沉着耐心。你喜欢自由地表达与讨论，喜欢较为自由的小组学习方%的同龄人',
  ],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
