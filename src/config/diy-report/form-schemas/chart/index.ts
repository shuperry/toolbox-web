import * as Area from './area'
import * as Hierarchical from './hierarchical'
import * as BarPercent from './bar-percent'
import * as BarPercent2 from './bar-percent-2'
import * as BarAndLine from './bar-and-line'
import * as BarFiveLevel from './bar-five-level'
import * as BarPercentCompare from './bar-percent-compare'
import * as Gauge from './gauge'
// import * as Gauge2 from './gauge-2'

export const schema = {
  chartArea: Area.schema,
  chartHierarchical: Hierarchical.schema,
  chartBarPercent: BarPercent.schema,
  chartBarPercent2: BarPercent2.schema,
  chartBarAndLine: BarAndLine.schema,
  chartBarFiveLevel: BarFiveLevel.schema,
  barPercentCompare: BarPercentCompare.schema,
  chartGauge: Gauge.schema,
  // chartGauge2: Gauge2.schema,
}

export const defaultData = {
  chartArea: Area.defaultData,
  chartHierarchical: Hierarchical.defaultData,
  chartBarPercent: BarPercent.defaultData,
  chartBarPercent2: BarPercent2.defaultData,
  chartBarAndLine: BarAndLine.defaultData,
  chartBarFiveLevel: BarFiveLevel.defaultData,
  barPercentCompare: BarPercentCompare.defaultData,
  chartGauge: Gauge.defaultData,
  // chartGauge2: Gauge2.defaultData,
}
