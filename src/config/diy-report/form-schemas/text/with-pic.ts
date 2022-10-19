import type { FormJsonSchemaType, ReportComponentDataType } from '@/container/diy-report/types'

const schema: FormJsonSchemaType[] = [
  { keyPath: 'textTop', label: '上文字', dataType: 'string', required: true },
  { keyPath: 'textBottom', label: '下文字', dataType: 'string', required: true },
  { keyPath: 'picUrl', label: '图片链接', dataType: 'string', required: true, type: 'url' },
]

const defaultData: ReportComponentDataType = {
  type: 'textWithPic',
  name: '图文',
  textTop: '凯拉奈特莉-女演员',
  textBottom:
    '语录：我喜欢表演的原因是可以得到改变，看看不同的人在不同的人生和做不同的事情，体验不一样的人生，受益匪浅。',
  picUrl:
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0F620093053%2F200F6093053-6-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628167289&t=49b88a3771a71feb0bc9c2559d9e0145',
  top: 0,
  bottom: 0,
}

export { schema, defaultData }
