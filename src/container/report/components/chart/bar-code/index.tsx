import React, { FC } from 'react'
import styles from './index.less'
import { ChartBarCode as PropType } from '../types'
/**
 * 条形代码图
 *
 * @param {string} id 数据唯一标志
 * @param {number} [total=34] 数据的统一上限值,默认34
 * @param {object} data 详细数据
 * @param {string} data[].label 数据标签
 * @param {number} data[].value 数据数值
 * @param {string} data[].color 数据展示颜色
 */
const colorArr = [
  '#226DDD',
  '#44B979',
  '#FF961F',
]
const BarCode:FC<PropType> = ({ total = 34, data }) => {
  return (<>
    <div className={styles.barCode}>
      {data.map((d, index) => (
        <div className={styles['bar-item']} key={d.label}>
          <div className={styles['bar-title']}>{d.label}</div>
          <div className={styles['bar-bd']}>
            <div className={ styles['bar-value']} style={{width: `${d.value/total*100}%`, backgroundColor:colorArr[index]||'#CCCCCC'}}></div>
          </div>
          <div className={styles.value} style={{color: colorArr[index]||'#CCCCCC'}}>{d.value}</div>
        </div>
      ))}
    </div>
  </>)
}
export default BarCode