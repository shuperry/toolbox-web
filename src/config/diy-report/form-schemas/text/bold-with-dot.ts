import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [{ keyPath: 'data', label: '文字', dataType: 'string', required: true }]

const defaultData: ReportComponentDataType = {
  type: 'textBoldWithDot',
  name: '重点正文带点',
  data: '您与您的孩子在以下指标上的评估严重不一致：',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
