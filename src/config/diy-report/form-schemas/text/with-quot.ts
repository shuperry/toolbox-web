import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [{ keyPath: 'textTop', label: '上文字', dataType: 'string', required: true }]

const defaultData: ReportComponentDataType = {
  type: 'textWithQuot',
  name: '引号包裹的左右两段说明文字',
  data: [
    {
      title: '家长·结果型',
      desc: '虽然较为内敛寡言，但常常采用命令式的沟通方式，并可能通过频繁地检查督促来确认结果。重视结果。',
    },
    {
      title: '学者·学者型',
      desc: '善于寻找学习的规律；能专心致志的完成学习任务；注重细节，能按制定的计划进行学习。能遵守规则与纪律。',
    },
  ],
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
