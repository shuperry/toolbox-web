import React, { FC, Fragment } from 'react'

import Img from '@/components/img'

import TableMergeRow, { emojiNameMeaningConf } from '../table-merge-row'
import styles from './index.less'

import { PropType } from '../table-merge-row/types'

// 默认提示区显示文本.
const defTipText = '查看自己在哪方面表现棒棒的，哪方面还可更上一层楼！'

/**
 * 带表情符号的表格.
 *
 * @param {boolean} showTip 是否显示提示区.
 * @param {string} tipText 提示区显示文本.
 * @param {boolean} showEmojiDesc 是否显示表情图片说明.
 * @param {{ title: string; dataIndex: string; width: number; mergeRow?: boolean; render?: (v: DataItem, i: number) => {}; }[]} columns 列配置.
 * @param {{ bgColor?: string, color?: string }} data 列表渲染源数据.
 * @param {{ show?: boolean; color?: string; bgColor?: string; style?: object; }} header 标题行配置.
 * @param {string} mergeCellFontColor 被合并单元格字体颜色值.
 */
const TableWithEmoji: FC<PropType> = ({ showTip, tipText, showEmojiDesc, data, header = {}, mergeCellFontColor }) => {
  return (
    <div className={styles.wrapper}>
      {showTip && (
        <div className={styles['tip-row']}>
          <div className={styles['tip-container']}>
            <div className={styles.tip}>{tipText || defTipText}</div>
          </div>
        </div>
      )}
      <TableMergeRow data={data} header={header} mergeCellFontColor={mergeCellFontColor} />
      {showEmojiDesc && (
        <div className={styles['emoji-desc-container']}>
          <div className={styles['desc-mark']}>说明：</div>
          <div>
            {emojiNameMeaningConf.map((item, idx) => (
              <Fragment key={`emoji-desc-${idx}`}>
                <Img className={styles[`emoji-img`]} src={`/images/report/${item.name}.png`} alt="图片" />
                表示“{item.desc}”{idx !== emojiNameMeaningConf.length - 1 && '，'}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TableWithEmoji
