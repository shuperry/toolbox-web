import * as Bold from './bold'
import * as BoldWithDot from './bold-with-dot'
import * as SpecialWithDot from './special-with-dot'
import * as WithSerial from './with-serial'
import * as Note from './note'
import * as WithDot from './with-dot'
import * as WithPic from './with-pic'
import * as WithPic2 from './with-pic2'
import * as WithWordsBold from './with-words-bold'
import * as Desc from './desc'
import * as WithIndent from './with-indent'
import * as WithOutIndent from './with-out-indent'
import * as WithOutIndent2 from './with-out-indent2'

/**
 * TODO 复杂类型延后处理.
 */
// import * as WithQuot from './with-quot'

export const schema = {
  textBold: Bold.schema,
  textBoldWithDot: BoldWithDot.schema,
  textSpecialWithDot: SpecialWithDot.schema,
  textWithSerial: WithSerial.schema,
  textNote: Note.schema,
  textWithDot: WithDot.schema,
  textWithPic: WithPic.schema,
  textWithPic2: WithPic2.schema,
  textWithWordsBold: WithWordsBold.schema,
  textDesc: Desc.schema,
  textWithIndent: WithIndent.schema,
  textWithoutIndent: WithOutIndent.schema,
  textWithoutIndent2: WithOutIndent2.schema,
  // textWithQuot: WithQuot.schema,
}

export const defaultData = {
  textBold: Bold.defaultData,
  textBoldWithDot: BoldWithDot.defaultData,
  textSpecialWithDot: SpecialWithDot.defaultData,
  textWithSerial: WithSerial.defaultData,
  textNote: Note.defaultData,
  textWithDot: WithDot.defaultData,
  textWithPic: WithPic.defaultData,
  textWithPic2: WithPic2.defaultData,
  textWithWordsBold: WithWordsBold.defaultData,
  textDesc: Desc.defaultData,
  textWithIndent: WithIndent.defaultData,
  textWithoutIndent: WithOutIndent.defaultData,
  textWithoutIndent2: WithOutIndent2.defaultData,
  // textWithQuot: WithQuot.defaultData,
}
