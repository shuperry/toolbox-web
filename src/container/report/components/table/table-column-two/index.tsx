import React, { FC } from 'react'

import { colorMap } from '@/config/colorMap'

import styles from './index.less'

interface PropType {
  data: Array<{
    label: string
    value: string
    color?: string
    fontWeight: number | string
  }>
}

/**
 * 表格-1
 *
 * @param {object[]} data 详细数据
 * @param {string} data[].label 表头标签内容（左侧）
 * @param {string} data[].value 表格右侧内容
 * @param {string} [data[].color] 右侧内容颜色
 * @param {string|number} [data[].fontWeight] 表格右侧内容文字粗细，加粗为600或'bold'
 */
const TableColumnTwo: FC<PropType> = ({ data }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.table}>
        {Array.isArray(data) &&
          data.map((d) => (
            <div className={styles.tr} key={d.label}>
              <div className={styles.th}>{d.label}</div>
              <div className={styles.td} style={{ color: colorMap[d.color], fontWeight: d.fontWeight as number }}>
                {d.value}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default TableColumnTwo
