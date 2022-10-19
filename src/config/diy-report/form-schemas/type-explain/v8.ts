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
  { keyPath: 'desc', label: '标题文字', dataType: 'string', required: true },
  { keyPath: 'data', label: '详细文字', dataType: 'string[]', required: true, allowAdd: true, allowRemove: true },
]

const defaultData: ReportComponentDataType = {
  type: 'typeExplain8',
  name: '类型说明8',
  text: 'F1',
  bgColor: 'green',
  desc: '驱体化',
  data: [
    '注意外部世界的人和物，通注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。过与人的互动获得能量，社会化，喜欢与人交流，主动行动。',
    '注意外部世界的人和物，注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。注意外部世界的人和物，通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。通过与人的互动获得能量，社会化，喜欢与人交流，主动行动。',
  ],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
