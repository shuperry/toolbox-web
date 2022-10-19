import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '标题文字', dataType: 'string', required: true },
  {
    keyPath: 'color',
    label: '颜色',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '黑色', value: 'black' },
      { label: '绿色', value: 'green' },
      { label: '红色', value: 'red' },
      { label: '黄色', value: 'yellow' },
    ],
    defaultValue: 'black',
    required: true,
  },
  {
    keyPath: 'align',
    label: '位置',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '居左', value: 'left' },
      { label: '居中', value: 'center' },
      { label: '居右', value: 'right' },
    ],
    defaultValue: 'left',
    required: true,
  },
]

const defaultData: ReportComponentDataType = {
  type: 'title4',
  color: 'black',
  name: '四级标题',
  title: '学习动力',
  align: 'left',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
