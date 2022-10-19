import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'text', label: '六边形文字', dataType: 'string', required: true },
  {
    keyPath: 'bgColor',
    label: '六边形颜色',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '绿色', value: 'green' },
      { label: '蓝色', value: 'blue' },
      { label: '橘黄色', value: 'orange' },
      { label: '黄色', value: 'yellow' },
      { label: '灰色', value: 'grey' },
      { label: '绿色(20%透明度)', value: 'green20' },
      { label: '绿色(60%透明度)', value: 'green60' },
      { label: '绿色(80%透明度)', value: 'green80' },
    ],
    defaultValue: 'green',
    required: true,
  },
  {
    keyPath: 'textColor',
    label: '六边形颜色',
    dataType: 'string',
    inputType: 'radio',
    options: [
      { label: '白色', value: 'white' },
      { label: '黑色', value: 'black' },
      { label: '绿色', value: 'green' },
    ],
    defaultValue: 'white',
    required: false,
  },
  { keyPath: 'data', label: '右侧文字', dataType: 'string', required: true },
]

const defaultData: ReportComponentDataType = {
  type: 'typeExplain6',
  name: '类型说明6',
  bgColor: 'green',
  text: '外向E',
  data: '注意外部世界的人和物，注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
