import * as Title0 from './title0'
import * as Title1 from './title1'
import * as Title2 from './title2'
import * as Title3 from './title3'
import * as Title3WithConflict from './title3-with-conflict'
import * as Title4 from './title4'

export const schema = {
  title0: Title0.schema,
  title1: Title1.schema,
  title2: Title2.schema,
  title3: Title3.schema,
  title3WithConflict: Title3WithConflict.schema,
  title4: Title4.schema,
}

export const defaultData = {
  title0: Title0.defaultData,
  title1: Title1.defaultData,
  title2: Title2.defaultData,
  title3: Title3.defaultData,
  title3WithConflict: Title3WithConflict.defaultData,
  title4: Title4.defaultData,
}
