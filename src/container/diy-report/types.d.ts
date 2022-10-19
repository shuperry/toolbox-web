export type ReportComponentDataType =
  | string
  | string[]
  | number
  | number[]
  | null
  | {
      [key: string]: unknown
    }
  | undefined

export type ReportComponentType = {
  id: string
  type: string
  name: string
  data: ReportComponentDataType
}

/** 生成报表数据编辑表单配置 */
export type FormJsonSchemaType = {
  keyPath: string // 字段路径.
  label: string // 字段中文名 / 字段标签.
  dataType:
    | 'string'
    | 'number'
    | 'percent'
    | 'string[]'
    | 'number[]'
    | 'boolean'
    | SingleSchemaType
    | SingleSchemaType[] // 数据类型.
  minSize?: number // ! 最少允许填写几项数据, 会自动初始化对应数量的输入组件, 且仅当 dataType 为数组时生效.
  maxSize?: number // ! 最多允许填写几项数据, 仅当 dataType 为数组时生效.
  allowAdd?: boolean // ! 是否允许手动添加数据, 仅当 dataType 为数组时生效.
  allowRemove?: boolean // ! 是否允许手动删除数据, 仅当 dataType 为数组时生效.
  maxLength?: number // 数据为字符串时最大可填写长度.
  min?: number // 数据可填写最小值, 仅当 dataType 为 number 时生效.
  max?: number // 数据可填写最大值, 仅当 dataType 为 number 时生效.
  inputType?: 'radio' | 'select' | 'input' // 输入组件类型, 默认为 text, datatype 为 string 时默认是 textarea 少数较短文本可以选择使用 input.
  allowLineBreak?: boolean // 是否允许输入换行符 (字符串输入组件默认为 textarea, 默认不允许输入换行符, 只有部分配置了 word-break: keep-all 样式的组件才支持换行符).
  options?: Array<{ label: string; value: string | number }> // ! 选项数据, 仅当 inputType 为 radio 和 select 时生效.
  defaultValue?: string | string[] | number | number[] | LabeledValue | LabeledValue[] // 默认值.
  getDefaultValue?: (currFormVal: any) => any // 获取默认值函数.
  /**
   * 拦截提交数据变更函数.
   *
   * @param value 正在修改的数据.
   * @param dataType 要修改数据的类型, currFormVal: 只更新当前表单对应的数据, components: 更新到整个组件列表.
   * @param idx 当前修改的数据所在数组中的下标, 是为了兼顾方便处理数组类型数据.
   */
  setValueInterceptor?: (val: any, dataType: 'currFormVal' | 'components', idx?: number) => void
  /**
   * 拦截提交数据删除函数.
   *
   * @param idx 当前修改的数据所在数组中的下标, 是为了兼顾方便处理数组类型数据.
   */
  removeValueInterceptor?: (idx?: number) => void
  type?: string // 表单类型, 如 url / email 等已知数据类型.
  /**
   * @param validator 验证数据合法性函数, e.g:
   * (_, value) => {
   *  if (condition) {
   *    return Promise.reject(new Error('not valid value'))
   *  } else {
   *    return Promise.resolve()
   *  }
   * }
   */
  validator?: (rule: any, value: any) => Promise
  errorMsg?: string // 数据填写不正确时的错误提示语.
  tip?: string // 字段说明.
  required?: boolean // 是否必填.
  requiredMsg?: string // 未填写必填字段时的错误提示语.
}

export type ComponentPickerItemType = {
  type: string
  name: string
  thumbnail: string // 组件缩略图相对于 @/assets 的路径, e.g: /images/report-thumbnail.
  show?: boolean // 该组件是否显示.
}

/** 组件选择弹出框数据 */
export type ComponentPickerDataType = Array<{
  groupId: string // 分组标识符.
  groupName: string
  show?: boolean // 该分组是否显示.
  components: Array<ComponentPickerItemType>
}>
