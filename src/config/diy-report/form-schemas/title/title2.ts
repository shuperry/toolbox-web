import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'title', label: '标题文字', dataType: 'string', required: true },
  { keyPath: 'titleRight.desc', label: '描述文字', dataType: 'string', required: false },
  { keyPath: 'titleRight.data', label: '数字', dataType: 'number', required: false },
]

const defaultData: ReportComponentDataType = {
  type: 'title2',
  name: '二级标题',
  title: '学习风格',
  titleRight: {
    desc: '总分：',
    data: '118',
  },
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
