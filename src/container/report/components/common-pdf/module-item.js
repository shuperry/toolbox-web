import React from 'react'

import {
  ChartBar,
  ChartPI,
  Title0,
  Title1,
  Title2,
  Title3,
  Title4,
  Title3WithConflict,
  TextWithIndent,
  TextWithoutIndent,
  TextWithoutIndent2,
  TextDesc,
  TextBold,
  TextBoldWithDot,
  TextSpecialWithDot,
  TextWithSerial,
  TextNote,
  TextWithDot,
  TextWithWordsBold,
  TextWithPic,
  TextWithPic2,
  TextWithQuot,
  ChartBarAndLine,
  TableColumnTwo,
  TableMergeRow,
  TableWithEmoji,
  ChartArea,
  ChartPositiveLine,
  ChartPotentialPerformance,
  ChartRadar,
  ChartBarCode,
  ChartBarCode2,
  ChartBarCodeDisc,
  ChartBarPercent,
  ChartBarPercent2,
  ChartBarPercentCompare,
  ChartIceBerg,
  ChartIceBerg2,
  ChartIceBerg3,
  ChartIceBerg4,
  ChartIceBerg5,
  ChartIceBerg6,
  ChartBarFull,
  ChartPreference,
  ChartStar,
  ChartSingleStar,
  ChartHierarchical,
  ChartBarFiveLevel,
  ChartDisc,
  ChartGauge,
  ChartGauge2,
  ChartGauge3,
  ChartTritanope,
  TypeExplain1,
  TypeExplain2,
  TypeExplain3,
  TypeExplain4,
  TypeExplain5,
  TypeExplain6,
  TypeExplain7,
  TypeExplain8,
  TypeExplain9,
  TypeExplain10,
  ChartRing,
  ChartRing2,
  ChartRose,
  ChartCareerAnchorDiff,
  ChartCareerAnchorScore,
  ReportImg,
  ColorTags,
  Error,
} from '@/container/report'

import HighComponent from './high-component'

export default ({ userInfo, item }) => {
  return (
    <HighComponent item={item}>
      {/* 大标题 */}
      {item.type === 'title0' && <Title0 {...item} />}
      {/* 一级标题 */}
      {item.type === 'title1' && <Title1 {...item} />}
      {/* 二级标题 */}
      {item.type === 'title2' && <Title2 {...item} />}
      {/* 三级标题 */}
      {item.type === 'title3' && <Title3 {...item} />}
      {/* 四级标题 */}
      {item.type === 'title4' && <Title4 {...item} />}
      {/* 三级标题带冲突指标 */}
      {item.type === 'title3WithConflict' && <Title3WithConflict {...item} />}
      {/* 未缩进正文 */}
      {item.type === 'textWithoutIndent' && <TextWithoutIndent {...item} />}
      {item.type === 'textWithoutIndent2' && <TextWithoutIndent2 {...item} />}
      {/* 缩进正文 */}
      {item.type === 'textWithIndent' && <TextWithIndent {...item} />}
      {/* 说明文字 */}
      {item.type === 'textDesc' && <TextDesc {...item} />}
      {/* 重点正文 */}
      {item.type === 'textBold' && <TextBold {...item} />}
      {/* 重点正文带点 */}
      {item.type === 'textBoldWithDot' && <TextBoldWithDot {...item} />}
      {/* 绿点正文 */}
      {item.type === 'textSpecialWithDot' && <TextSpecialWithDot {...item} />}
      {/* 序号正文 */}
      {item.type === 'textWithSerial' && <TextWithSerial {...item} />}
      {/* 注释文字 */}
      {item.type === 'textNote' && <TextNote {...item} />}
      {/* 带圆点的正文 */}
      {item.type === 'textWithDot' && <TextWithDot {...item} />}
      {/* 图文 */}
      {item.type === 'textWithPic' && <TextWithPic {...item} />}
      {/* 图文2 */}
      {item.type === 'textWithPic2' && <TextWithPic2 {...item} />}
      {/* 正文数字突出 */}
      {item.type === 'textWithWordsBold' && <TextWithWordsBold {...item} />}
      {/* 引号包裹的左右两段说明文字 */}
      {item.type === 'textWithQuot' && <TextWithQuot {...item} />}
      {item.type === 'reportImg' && <ReportImg {...item} />}
      {/* 类型说明 */}
      {item.type === 'typeExplain1' && <TypeExplain1 {...item} />}
      {/* 类型说明2 */}
      {item.type === 'typeExplain2' && <TypeExplain2 {...item} />}
      {/* 类型说明3 */}
      {item.type === 'typeExplain3' && <TypeExplain3 {...item} />}
      {/* 类型说明4 */}
      {item.type === 'typeExplain4' && <TypeExplain4 {...item} />}
      {/* 类型说明5 */}
      {item.type === 'typeExplain5' && <TypeExplain5 {...item} />}
      {/* 类型说明6 */}
      {item.type === 'typeExplain6' && <TypeExplain6 {...item} />}
      {/* 类型说明7 */}
      {item.type === 'typeExplain7' && <TypeExplain7 {...item} />}
      {/* 类型说明8 */}
      {item.type === 'typeExplain8' && <TypeExplain8 {...item} />}
      {/* 类型说明9 */}
      {item.type === 'typeExplain9' && <TypeExplain9 {...item} />}
      {/* 类型说明10 */}
      {item.type === 'typeExplain10' && <TypeExplain10 {...item} />}
      {/* 玫瑰图 */}
      {item.type === 'chartRose' && <ChartRose {...item} />}
      {/* 环形图 */}
      {item.type === 'chartRing' && <ChartRing {...item} />}
      {/* 环形图-2 */}
      {item.type === 'chartRing2' && <ChartRing2 {...item} />}
      {item.type === 'chartPreference' && <ChartPreference {...item} />}
      {/* 柱状图 */}
      {item.type === 'chartBar' && <ChartBar {...item} />}
      {/* 柱状折线混合图 */}
      {item.type === 'chartBarAndLine' && <ChartBarAndLine {...item} />}
      {/* 阳性线常模图 */}
      {item.type === 'chartPositiveLine' && <ChartPositiveLine {...item} />}
      {/* 整体条形图 */}
      {item.type === 'chartBarFull' && <ChartBarFull {...item} />}
      {/* PI风格视图 */}
      {item.type === 'chartPI' && <ChartPI {...item} />}
      {/* 潜能表现图（特殊柱状图4） */}
      {item.type === 'chartPotentialPerformance' && <ChartPotentialPerformance {...item} />}
      {/* 条形代码图 */}
      {item.type === 'chartBarCode' && <ChartBarCode {...item} />}
      {/* 双向条形代码图 */}
      {item.type === 'chartBarCode2' && <ChartBarCode2 {...item} />}
      {/* 双向条形代码图-DISC */}
      {item.type === 'chartBarCodeDisc' && <ChartBarCodeDisc {...item} />}
      {/* 条形图（按百分比变化颜色） */}
      {item.type === 'chartBarPercent' && <ChartBarPercent {...item} />}
      {/* 条形图（按百分比变化颜色） */}
      {item.type === 'chartBarPercent2' && <ChartBarPercent2 {...item} />}
      {/* 比较条形图 */}
      {item.type === 'barPercentCompare' && <ChartBarPercentCompare {...item} />}
      {/* 曲线图 */}
      {item.type === 'chartArea' && <ChartArea {...item} />}
      {/* 雷达图 */}
      {item.type === 'chartRadar' && <ChartRadar {...item} />}
      {/* 冰山图 */}
      {item.type === 'chartIceBerg' && <ChartIceBerg {...item} />}
      {/* 冰山图-2 */}
      {item.type === 'chartIceBerg_2' && <ChartIceBerg2 {...item} />}
      {/* 冰山图-3 */}
      {item.type === 'chartIceBerg_3' && <ChartIceBerg3 {...item} />}
      {/* 冰山图-4 */}
      {item.type === 'chartIceBerg_4' && <ChartIceBerg4 {...item} />}
      {/* 冰山图-5 */}
      {item.type === 'chartIceBerg_5' && <ChartIceBerg5 {...item} />}
      {/* 冰山图-6 */}
      {item.type === 'chartIceBerg_6' && <ChartIceBerg6 {...item} />}
      {/* 星星图 */}
      {item.type === 'chartStar' && <ChartStar userInfo={userInfo} {...item} />}
      {item.type === 'chartSingleStar' && <ChartSingleStar {...item} />}
      {/* 马斯洛需求层次模型图 */}
      {item.type === 'chartHierarchical' && <ChartHierarchical {...item} />}
      {/* 五级条形图 */}
      {item.type === 'chartBarFiveLevel' && <ChartBarFiveLevel {...item} />}
      {/* DISC 图 */}
      {item.type === 'chartDisc' && <ChartDisc {...item} />}
      {/* 仪表图 */}
      {item.type === 'chartGauge' && <ChartGauge {...item} />}
      {/* 仪表图-2 */}
      {item.type === 'chartGauge2' && <ChartGauge2 {...item} />}
      {/* 仪表图-3 */}
      {item.type === 'chartGauge3' && <ChartGauge3 {...item} />}
      {/* 色彩辨别弱项分布图 */}
      {item.type === 'chartTritanope' && <ChartTritanope {...item} />}
      {/* 职业锚 - 你的得分与常模平均分差异图 */}
      {item.type === 'chartCareerAnchorDiff' && <ChartCareerAnchorDiff {...item} />}
      {/* 职业锚 - 你的得分与常模平均分 */}
      {item.type === 'chartCareerAnchorScore' && <ChartCareerAnchorScore {...item} />}
      {/* 表格-1 */}
      {item.type === 'tableColumnTwo' && <TableColumnTwo {...item} />}
      {/* 表格-2 */}
      {item.type === 'tableMergeRow' && <TableMergeRow {...item} />}
      {/* 表格 - 表情 */}
      {item.type === 'tableWithEmoji' && <TableWithEmoji {...item} />}
      {/* 彩色标签 */}
      {item.type === 'colorTags' && <ColorTags {...item} />}
      {/* 错误组件 */}
      {item.type === 'error' && <Error {...item} />}
    </HighComponent>
  )
}
