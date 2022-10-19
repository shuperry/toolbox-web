import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'leftText', label: '左文字', dataType: 'string', required: true },
  { keyPath: 'rightText', label: '右文字', dataType: 'string', required: true },
]

const defaultData: ReportComponentDataType = {
  type: 'textWithWordsBold',
  name: '正文数字突出',
  leftText: '学习动力',
  rightText: '超过<span>75%</span>的同龄人',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
