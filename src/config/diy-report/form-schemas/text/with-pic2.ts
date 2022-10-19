import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'textTop', label: '上文字', dataType: 'string', required: true },
  { keyPath: 'textBottom', label: '下文字', dataType: 'string', required: true },
  { keyPath: 'picUrl', label: '图片链接', dataType: 'string', required: true, type: 'url' },
]

const defaultData: ReportComponentDataType = {
  type: 'textWithPic2',
  name: '图文',
  textTop: '学习力概念',
  textBottom:
    '“学习力”最初源于管理学领域（J. W. Forrester, 1965），后迁移到教育学领域。尽管对其内涵定位和理解上存在诸多差异，国内学者仍有共识，认为学习力是依附于人而存在，在学习活动中生成并发展的某种能量/品性/素质/能力（陈维维, 2010）。',
  picUrl:
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0F620093053%2F200F6093053-6-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628167289&t=49b88a3771a71feb0bc9c2559d9e0145',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
