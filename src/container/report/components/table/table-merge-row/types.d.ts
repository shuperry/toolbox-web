interface Column {
  title: string; // 列名称.
  isEmoji?: boolean; // 是否表情图片.
  width: number; // 列宽度.
  align?: 'left' | 'center' | 'right'; // 列对齐方式.
  fullMerge?: boolean; // 是否整列合并.
  render?: (v: DataItem, i: number, c: Column) => {}; // 列自定义渲染函数.
}

interface DataSourceItem {
  rowSpan?: number; // 需要跨几行.
  val: string; // 字段值.
  align?: 'left' | 'center' | 'right'; // 列对齐方式.
  color?: string; // 单元格字体颜色.
  bgColor?: string; // 单元格背景色.
  style?: object; // 单元格自定义样式.
}

export interface DataItem {
  dataSource: DataSourceItem[];
  color?: string; // 单元格字体颜色.
  bgColor?: string; // 单元格背景色.
  style?: object; // 单元格自定义样式.
}

export interface PropType {
  showTip?: boolean; // 是否显示提示区.
  tipText?: string; // 提示区显示文本.
  showEmojiDesc?: boolean; // 是否显示表情图片说明.
  data?: DataItem[]; // 列表渲染源数据.
  lineHeight?: number; // 表格行高.
  header?: {
    show?: boolean; // 是否显示标题行.
    columns?: Column[]; // 列配置.
    color?: string; // 标题行字体颜色值.
    bgColor?: string; // 标题行背景颜色值.
    style?: object; // 标题行自定义样式.
  };
  mergeCellFontColor?: string; // 被合并单元格字体颜色值.
}
