import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [{ keyPath: 'data', label: '文字', dataType: 'string', required: true }]

const defaultData: ReportComponentDataType = {
  type: 'textNote',
  name: '注释文字',
  data: '你的一般能力良好，通常相信通过自己的努力可以改变原有的能力水平。但是偶尔也，以一种固定的思维去看待自己，认为自己也就那样。',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
