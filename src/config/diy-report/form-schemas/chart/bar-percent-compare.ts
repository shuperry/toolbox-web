import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  {
    keyPath: 'flag.text',
    label: '比较基数文案',
    dataType: 'string',
    inputType: 'input',
    required: true,
    maxLength: 20,
  },
  {
    keyPath: 'flag.value',
    label: '比较基础百分比',
    dataType: 'number',
    required: true,
    min: 0,
    max: 100,
    tip: '数值范围 0 - 100',
  },
  {
    keyPath: 'data',
    label: '超过百分比',
    dataType: 'number',
    required: true,
    min: 0,
    max: 100,
    tip: '数值范围 0 - 100',
  },
]

const defaultData: ReportComponentDataType = {
  type: 'barPercentCompare',
  name: '比较条形图',
  flag: {
    text: '985目标线·80%',
    value: 80,
  },
  data: 62,
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
