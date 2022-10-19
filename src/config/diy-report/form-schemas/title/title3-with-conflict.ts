import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '标题文字', dataType: 'string', required: true },
  {
    keyPath: 'conflictLevel',
    label: '冲突等级',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '严重冲突', value: 'serious' },
      { label: '一般冲突', value: 'normal' },
      { label: '无冲突', value: 'special' },
    ],
    defaultValue: 'special',
    required: true,
  },
]

const defaultData: ReportComponentDataType = {
  type: 'title3WithConflict',
  name: '三级标题',
  title: '学习动力',
  conflictLevel: 'serious',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
