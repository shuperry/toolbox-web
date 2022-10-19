import React, { FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import { merge } from 'lodash'

import { colorMap } from '@/config/colorMap'

import Img from '@/components/img'

import styles from './index.less'

import { PropType, DataItem } from './types'

const isFunction = (obj: any): boolean => typeof obj === 'function'

// 表情图片名称与描述映射.
export const emojiNameMeaningConf = [
  { name: 'emoji_best', desc: '非常优异' },
  { name: 'emoji_wonderful', desc: '优秀' },
  { name: 'emoji_good', desc: '良好' },
  { name: 'emoji_norm', desc: '正常' },
  { name: 'emoji_poor', desc: '欠佳' },
  { name: 'emoji_bad', desc: '较差' },
  { name: 'emoji_behind', desc: '落后' },
]

// 默认对齐方式居左.
const defAlign = 'left'

// 根据 rowSpan 计算需要隐藏的数据行下标.
const getHideRowIndexes = (data: DataItem[]) => {
  const hideRowIndexes = {}

  const keyConf = {}

  data.forEach((item, idx) => {
    item.dataSource.forEach((v, idx2) => {
      if (v.rowSpan && v.rowSpan > 1) {
        keyConf[idx2] = {
          rowSpan: v.rowSpan,
          rowSpanStartRowIdx: idx,
        }
      } else if (
        keyConf[idx2] &&
        keyConf[idx2].rowSpan !== undefined &&
        idx <= keyConf[idx2].rowSpan + keyConf[idx2].rowSpanStartRowIdx - 1
      ) {
        hideRowIndexes[idx2] = hideRowIndexes[idx2] || []
        hideRowIndexes[idx2].push(idx)
      }
    })
  })

  return hideRowIndexes
}

// 默认标题行背景颜色值.
const defHeaderRowBgColor = 'rgba(68, 185, 121, 0.05)'

// 默认标题行字体颜色值.
const defHeaderRowColor = '#7c7c7c'

// 默认单元格字体颜色值.
const defCellFontColor = '#1E1E1E'

// 默认被合并单元格字体颜色值.
const defMergeCellFontColor = '#44B979'

// 默认行高.
const defLineHeight = 51

/**
 * 可合并行表格.
 *
 * @param {
 *    Array<{
 *      dataSource: Array<{
 *        val: string;
 *        rowSpan?: number;
 *        align?: 'left' | 'center' | 'right';
 *        bgColor?: string;
 *        color?: string;
 *        style?: object
 *      }>;
 *      bgColor?: string,
 *      color?: string,
 *      style?: object
 *    }>
 * } data 列表渲染源数据.
 * @param {{
 *    show?: boolean;
 *    columns: Array<{
 *      title: string;
 *      dataIndex: string;
 *      isEmoji?: boolean;
 *      width: number;
 *      align?: 'left' | 'center' | 'right';
 *      fullMerge?: boolean;
 *      render?: (v: DataItem, i: number, c: Column) => {};
 *    }>;
 *    color?: string;
 *    bgColor?: string;
 *    style?: object;
 * }} header 标题行配置.
 * @param {string} mergeCellFontColor 被合并单元格字体颜色值.
 */
const TableMergeRow: FC<PropType> = ({ data = [], lineHeight, header = { columns: [] }, mergeCellFontColor }) => {
  const [hideRowIndexes, setHideRowIndexes] = useState({})

  const columns = header.columns || []

  const _lineHeight = lineHeight || defLineHeight

  useEffect(() => {
    setHideRowIndexes(getHideRowIndexes(data))
  }, [data])

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        {header.show !== false && (
          <thead>
            <tr
              style={{
                backgroundColor: colorMap[header.bgColor] || defHeaderRowBgColor,
                color: colorMap[header.color] || defHeaderRowColor,
                ...(header.style || {}),
                height: `${_lineHeight}px`,
              }}
            >
              {columns.map((col, idx) => (
                <th
                  key={`th-${idx}`}
                  style={col.width ? { width: col.width } : {}}
                  className={classnames(
                    idx === columns.length - 1 ? `${styles.rightColumn}` : undefined,
                    styles[`align-${col.align || defAlign}`],
                  )}
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>
          {(data || []).map((v, idx1) => (
            <tr
              key={`body_tr_${idx1}`}
              className={idx1 === data.length - 1 ? styles.bottomRow : undefined}
              style={
                v.bgColor
                  ? { backgroundColor: colorMap[v.bgColor], height: `${_lineHeight}px` }
                  : { height: `${_lineHeight}px` }
              }
            >
              {(v.dataSource || []).map((d, idx2) =>
                ((columns[idx2] || {}).fullMerge && idx1 !== 0) ||
                (hideRowIndexes[idx2] || []).includes(idx1) ? undefined : (
                  <td
                    key={`body_td_${idx1}_${idx2}`}
                    align={(columns[idx2] || {}).align || defAlign}
                    rowSpan={
                      (columns[idx2] || {}).fullMerge && idx1 === 0
                        ? data.length
                        : v.dataSource[idx2].rowSpan
                        ? v.dataSource[idx2].rowSpan
                        : undefined
                    }
                    className={classnames(
                      idx2 === columns.length - 1 ? `${styles.rightColumn}` : undefined,
                      styles[`align-${v.dataSource[idx2].align || defAlign}`],
                    )}
                    style={
                      (columns[idx2] || {}).fullMerge && idx1 === 0
                        ? {
                            width: (columns[idx2] || {}).width,
                            borderBottom: 0,
                            color: colorMap[mergeCellFontColor] || defMergeCellFontColor,
                            backgroundColor: colorMap[v.bgColor] || '',
                            ...(v.style || {}),
                          }
                        : {
                            color: colorMap[v.dataSource[idx2].color || v.color] || defCellFontColor,
                            backgroundColor: colorMap[v.dataSource[idx2].bgColor || v.bgColor] || '',
                            ...merge(v.style || {}, v.dataSource[idx2].style || {}),
                          }
                    }
                  >
                    {(columns[idx2] || {}).isEmoji &&
                    emojiNameMeaningConf.map((item) => item.name).includes(v.dataSource[idx2].val) ? (
                      <Img
                        className={styles[`emoji-img`]}
                        src={`/images/report/${v.dataSource[idx2].val}.png`}
                        alt="图片"
                      />
                    ) : isFunction((columns[idx2] || {}).render) ? (
                      // @ts-ignore
                      (
                        columns[idx2] || {
                          render(d, i, col) {
                            return null
                          },
                        }
                      ).render(v, idx1, columns[idx2])
                    ) : (
                      v.dataSource[idx2].val
                    )}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMergeRow
