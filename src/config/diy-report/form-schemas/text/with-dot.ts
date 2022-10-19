import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'data', label: '文字', dataType: 'string[]', required: true, allowAdd: true },
  {
    keyPath: 'dotColor',
    label: '文字颜色',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '绿色', value: 'green' },
      { label: '红色', value: 'red' },
      { label: '黄色', value: 'yellow' },
    ],
    defaultValue: 'green',
    required: true,
  },
]

const defaultData: ReportComponentDataType = {
  type: 'textWithDot',
  name: '带圆点的正文',
  dotColor: 'green', //默认green green,red,yellow
  data: [
    '增强学习意愿：你学习意愿的程度不强，可能是因为你没有深刻生的挫败情绪。',
    '增强学习意愿：你学习意愿的程度不强，可能是因为你没有深刻生的挫败情绪。',
  ],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
