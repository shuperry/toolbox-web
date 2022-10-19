import * as Text from './text'
import * as Title from './title'
import * as TypeExplain from './type-explain'
import * as Chart from './chart'

export const schema = { ...Text.schema, ...Title.schema, ...TypeExplain.schema, ...Chart.schema }

export const defaultData = {
  ...Text.defaultData,
  ...Title.defaultData,
  ...TypeExplain.defaultData,
  ...Chart.defaultData,
}
