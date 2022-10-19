import type { ComponentPickerDataType } from '@/container/diy-report/types'

const data: ComponentPickerDataType = [
  {
    groupId: 'title',
    groupName: '标题',
    components: [
      { type: 'title0', name: '大标题', thumbnail: '/images/report-thumbnail/title/title0.png' },
      { type: 'title1', name: '一级标题', thumbnail: '/images/report-thumbnail/title/title1.png' },
      { type: 'title2', name: '二级标题', thumbnail: '/images/report-thumbnail/title/title2.png' },
      { type: 'title3', name: '三级标题', thumbnail: '/images/report-thumbnail/title/title3.png' },
      {
        type: 'title3WithConflict',
        name: '三级标题 (附带冲突指标)',
        thumbnail: '/images/report-thumbnail/title/title3WithConflict.png',
      },
      { type: 'title4', name: '四级标题', thumbnail: '/images/report-thumbnail/title/title4.png' },
    ],
  },
  {
    groupId: 'text',
    groupName: '文本',
    components: [
      { type: 'textBold', name: '重点正文', thumbnail: '/images/report-thumbnail/text/textBold.png' },
      { type: 'textBoldWithDot', name: '重点正文带点', thumbnail: '/images/report-thumbnail/text/textBoldWithDot.png' },
      {
        type: 'textSpecialWithDot',
        name: '绿点正文',
        thumbnail: '/images/report-thumbnail/text/textSpecialWithDot.png',
      },
      { type: 'textDesc', name: '说明文字', thumbnail: '/images/report-thumbnail/text/textDesc.png' },
      { type: 'textWithIndent', name: '缩进文字', thumbnail: '/images/report-thumbnail/text/textWithIndent.png' },
      {
        type: 'textWithoutIndent',
        name: '未缩进文字',
        thumbnail: '/images/report-thumbnail/text/textWithOutIndent.png',
      },
      {
        type: 'textWithoutIndent2',
        name: '未缩进文字-2',
        thumbnail: '/images/report-thumbnail/text/textWithoutIndent2.png',
      },
      { type: 'textWithSerial', name: '序号正文', thumbnail: '/images/report-thumbnail/text/textWithSerial.png' },
      { type: 'textNote', name: '注释文字', thumbnail: '/images/report-thumbnail/text/textNote.png' },
      { type: 'textWithDot', name: '带圆点的正文', thumbnail: '/images/report-thumbnail/text/textWithDot.png' },
      { type: 'textWithPic', name: '图文', thumbnail: '/images/report-thumbnail/text/textWithPic.png' },
      { type: 'textWithPic2', name: '图文-2', thumbnail: '/images/report-thumbnail/text/textWithPic2.png' },
      {
        type: 'textWithWordsBold',
        name: '正文数字突出',
        thumbnail: '/images/report-thumbnail/text/textWithWordsBold.png',
      },
      {
        type: 'textWithQuot',
        name: '引号包裹的左右两段说明文字',
        thumbnail: '/images/report-thumbnail/text/textWithQuot.png',
        show: false,
      },
    ],
  },
  {
    groupId: 'type-explain',
    groupName: '类型说明',
    components: [
      { type: 'typeExplain1', name: '类型说明1', thumbnail: '/images/report-thumbnail/type-explain/typeExplain1.png' },
      { type: 'typeExplain2', name: '类型说明2', thumbnail: '/images/report-thumbnail/type-explain/typeExplain2.png' },
      {
        type: 'typeExplain3',
        name: '类型说明3',
        thumbnail: '/images/report-thumbnail/type-explain/typeExplain3.png',
        show: false,
      },
      { type: 'typeExplain4', name: '类型说明4', thumbnail: '/images/report-thumbnail/type-explain/typeExplain4.png' },
      { type: 'typeExplain5', name: '类型说明5', thumbnail: '/images/report-thumbnail/type-explain/typeExplain5.png' },
      { type: 'typeExplain6', name: '类型说明6', thumbnail: '/images/report-thumbnail/type-explain/typeExplain6.png' },
      { type: 'typeExplain7', name: '类型说明7', thumbnail: '/images/report-thumbnail/type-explain/typeExplain7.png' },
      { type: 'typeExplain8', name: '类型说明8', thumbnail: '/images/report-thumbnail/type-explain/typeExplain8.png' },
      {
        type: 'typeExplain9',
        name: '类型说明9',
        thumbnail: '/images/report-thumbnail/type-explain/typeExplain9.png',
        show: false,
      },
      {
        type: 'typeExplain10',
        name: '类型说明10',
        thumbnail: '/images/report-thumbnail/type-explain/typeExplain10.png',
        show: false,
      },
    ],
  },
  {
    groupId: 'chart',
    groupName: '图表',
    components: [
      { type: 'chartArea', name: '曲线/面积图', thumbnail: '/images/report-thumbnail/chart/chartArea.png' },
      { type: 'chartBar', name: '柱状图', thumbnail: '/images/report-thumbnail/chart/chartBar.png', show: false },
      {
        type: 'chartBarAndLine',
        name: '柱状折线混合图',
        thumbnail: '/images/report-thumbnail/chart/chartBarAndLine.png',
      },

      // TODO 测试当前配置是否兼容.
      {
        type: 'chartBarCode',
        name: '条形代码图',
        thumbnail: '/images/report-thumbnail/chart/chartBarCode.png',
        show: false,
      },
      {
        type: 'chartBarCode2',
        name: '双向条形代码图',
        thumbnail: '/images/report-thumbnail/chart/chartBarCode2.png',
        show: false,
      },
      {
        type: 'chartBarCodeDisc',
        name: '双向条形代码图-DISC',
        thumbnail: '/images/report-thumbnail/chart/chartBarCodeDisc.png',
        show: false,
      },
      {
        type: 'chartBarFiveLevel',
        name: '五级条形图',
        thumbnail: '/images/report-thumbnail/chart/chartBarFiveLevel.png',
      },
      {
        type: 'chartBarFull',
        name: '整体条形图',
        thumbnail: '/images/report-thumbnail/chart/chartBarFull.png',
        show: false,
      },
      {
        type: 'chartBarPercent',
        name: '条形图（按百分比变化颜色）',
        thumbnail: '/images/report-thumbnail/chart/chartBarPercent.png',
      },
      {
        type: 'chartBarPercent2',
        name: '条形图（按百分比变化颜色）-2',
        thumbnail: '/images/report-thumbnail/chart/chartBarPercent2.png',
      },
      {
        type: 'barPercentCompare',
        name: '比较条形图',
        thumbnail: '/images/report-thumbnail/chart/barPercentCompare.png',
      },
      { type: 'chartDisc', name: 'DISC 图', thumbnail: '/images/report-thumbnail/chart/chartDisc.png', show: false },
      { type: 'chartGauge', name: '仪表图', thumbnail: '/images/report-thumbnail/chart/chartGauge.png' },
      {
        type: 'chartGauge2',
        name: '仪表图-2',
        thumbnail: '/images/report-thumbnail/chart/chartGauge2.png',
        show: false,
      },
      { type: 'chartGauge3', name: '仪表图-3', thumbnail: '', show: false },
      {
        type: 'chartHierarchical',
        name: '马斯洛需求层次模型图',
        thumbnail: '/images/report-thumbnail/chart/chartHierarchical.png',
      },
    ],
  },
  {
    groupId: 'others',
    groupName: '其它',
    show: false,
    components: [
      { type: 'colorTags', name: '彩色标签', thumbnail: '/images/report-thumbnail/others/colorTags.png', show: false },
      { type: 'reportImg', name: '图片', thumbnail: '/images/report-thumbnail/others/reportImg.png', show: false },
      { type: 'error', name: '错误', thumbnail: '/images/report-thumbnail/others/error.png', show: false },
    ],
  },
]

export default data
