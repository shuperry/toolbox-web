import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType = [{ keyPath: 'data', label: '文字', dataType: 'string', required: true }]

const defaultData: ReportComponentDataType = {
  type: 'textWithoutIndent',
  name: '未缩进正文',
  data: '你的动力、学习执行力、学习能力和环境影响四个学习力指标的关键因素，你要安装推荐方案尽快强化学习动力哦！',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
