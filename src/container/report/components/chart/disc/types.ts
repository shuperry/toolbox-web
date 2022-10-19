export interface ChartDiscItemType {
  title: string // 标题.
  values: [number, number, number, number] // 数字取值在 1 至 -1 范围内.
  type: string // 图类型, DISC 四个字母中未出现的字母将会不显示值代表的动物图标.
  typeDesc: string // 图类型说明.
}

export interface PropType {
  data?: Array<ChartDiscItemType>
}
