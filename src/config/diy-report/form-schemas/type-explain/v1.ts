import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'titleType', label: '左侧标题', dataType: 'string', required: true, allowLineBreak: true },
  { keyPath: 'data', label: '右侧正文', dataType: 'string', required: true },
]

const defaultData: ReportComponentDataType = {
  type: 'typeExplain1',
  name: '类型说明1',
  titleType: '外向型',
  data: '你的开朗外向，善于沟通，灵活变通，也能沉着耐心。你喜欢自由地表达与讨论，喜欢较为自由的小组学习方%的同龄人',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
