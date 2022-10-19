// 柱状图1，2
export interface CharBar {
  id: number | string
  columnData: string[]
  dataType: 'int' | 'percent'
  data: number[][]
  names?: string[]
  markLine?: number[]
  legend?: boolean
  colors?: string[]
}

// 柱状折线混合图（柱状图3）
export interface ChartBarAndLine {
  id: number | string
  columnData: string[]
  dataType: 'int' | 'percent'
  barData: number[][]
  lineData: number[][]
  names?: string[]
  markLine?: number[]
  legend?: boolean
  colors: string[]
}

// 阳型线常模图
export interface PositiveLine {
  data: Array<{
    label: string
    value: number
    model: number[]
  }>
}

// 整体条形图
export namespace CharBarFullTypes {
  interface Item {
    label: string
    value: number
    percent: number
    gray?: boolean
  }

  interface ItemPropType {
    item: Item
    role?: 'student' | 'parent'
  }

  interface Module {
    label: string
    desc: string
    completion: number
    scores: Item[]
  }

  interface PropType {
    data: Module[]
    role?: 'student' | 'parent'
  }
}

// 条形代码图
export interface ChartBarCode {
  total: number
  data: Array<{
    label: string
    value: number
    color: string
  }>
}

// 双向条形代码图
export interface ChartBarCode2 {
  data: Array<{
    label: Array<{
      title: string
      word: string
    }>
    value: {
      direction: 'left' | 'right'
      value: '1' | '2' | '3' | '4'
    }
  }>
}

// 双向条形代码图 - DISC.
export interface ChartBarCodeDisc {
  data: Array<{
    label: Array<{
      title: string
      word: string
    }>
    value: number
  }>
}

//条形图（百分比）
export interface ChartBarPercent {
  color: string
  data: number
  title?: string
}

// 比较条形图
export interface BarPercentCompare {
  flag: {
    text: string
    value: number
  }
  color: string
  data: number
}

// 雷达图
export interface ChartRadarPropType {
  containerId?: string // 要渲染雷达图的容器 id.
  title?: string // 雷达图标题.
  data: number[][] // 要渲染的数据, 如果是百分比, 建议在 0 - 100 之间.
  max?: number // 数据值为数字时最大刻度值.
  dataType?: 'number' | 'percent' // 数据显示类型, 支持数字或百分比.
  shape?: 'circle' | 'polygon' // 雷达形状, 支持: circle (圆形), polygon (多边形).
  colors?: string[] // 雷达图块颜色值, 默认: ['#44B979', '#FFBA15'].
  names?: Array<{
    name: string // 雷达图数据名称.
    showDesc?: boolean // 是否显示雷达数据名称说明.
    desc?: string // 雷达图数据名称说明.
  }> // 每一个雷达代表的数据名称.
  showTick?: boolean // 是否显示刻度数据.
  showLegend?: boolean // 是否显示图例.
  legends?: string[] // 图例名称.
}

// 职业锚 - 你的得分与常模平均分差异图
export interface ChartCareerAnchorDiffPropType {
  containerId?: string // 要渲染图表的容器 id.
  data: {
    title?: string // 标题.
    values: number[]
    labels: string[]
  }
}

// 职业锚 - 你的得分与常模平均分.
export interface ChartCareerAnchorScorePropType {
  containerId?: string // 要渲染图表的容器 id.
  data: {
    title?: string
    desc?: string // 说明.
    legends: string[] // 图例.
    maxScore: number // 横坐标最大刻度.
    values: Array<{ label: string; score: number; normScore: number; diffNum: string; color: 'green' | 'orange' }> // 数据
  }
}

// 仪表图
export interface ChartGaugePropType {
  containerId?: string // 要渲染仪表图的容器 id.
  data: {
    value: number
    text: string
  }
}

// 仪表图 - 2
export interface ChartGauge2PropType {
  containerId?: string // 要渲染仪表图的容器 id.
  data: Array<{
    value: number
    text: string
  }>
}

// 色彩辨别弱项分布图
export interface ChartTritanopePropType {
  data: {
    values: number[] // 错误的色块序号数组, 取值 1 - 40.
    desc: string
  }
}

// 冰山图
export namespace ChartIceBergPropType {
  interface DataItem {
    title: string // 数据标题.
    status: 'excellent' | 'warning' | 'bad' // 数据状态, 支持: excellent (优秀), warning (警告), bad (较差).
    values: Array<{
      name: string // 数据细项名称.
      type: 'string' | 'number' | 'percent' // 数据细项类型, 支持: string (数字), number (数字), percent (百分比).
      val: string | number // 数据细项值, 支持类型: 字符串, 数字.
      stringValColor?: 'red' | 'orange' | 'yellow' | 'green' | 'dark-green' // 数据细项值为字符串时, 显示的颜色类型, 支持: red | orange | yellow | green | dark-green.
      markVal: number // 数据细项标准线位置.
    }> // 数据细项, 格式: 数组.
  }

  interface PropType {
    data: DataItem[]
  }
}

// 冰山图-2
export interface ChartIceBerg2PropType {
  data: {
    title: string
    values: Array<{
      name: string // 数据项名称.
      type?: 'string' | 'number' | 'percent' // 数据项类型, 支持: string (数字), number (数字), percent (百分比).
      val: string | number // 数据项值, 支持类型: 字符串, 数字.
    }>
  }
}

// 星星图.
export namespace ChartStarPropType {
  type StarType = 1 | 2 | 3 | 4 | 5 // 分值, 整数, 支持 0 - 5.

  interface ValueType {
    label: string // 标题.
    star: StarType // 星星数量.
    descConf?: string[] // 各星对应描述语.
  }

  interface PropType {
    data: {
      title: string // 标题.
      star: StarType // 总星数.
      valuesTitle?: string // 各数值总标题.
      values: Array<ValueType>
    }
    userInfo: any
  }
}
