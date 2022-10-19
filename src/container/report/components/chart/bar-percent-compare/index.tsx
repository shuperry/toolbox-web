import React, { FC } from 'react'
import { BarPercentCompare as PropType  } from '../types'
import styles from './index.less'
/**
 * 比较条形图
 *
 * @param {object} conf 图标基本数据
 * @param {string} id 数据唯一标志
 * @param {object} flag 比较基数数据
 * @param {string} flag.text 比较基数的文案
 * @param {number} flag.value 比较基数的值
 * @param {string} [color='#44B979'] 数据的统一上限值,默认#44B979
 * @param {number} data 详细数据,数值
 */
const BarPercentCompare: FC<PropType> = ({ flag, color = '#44B979', data }) => {
  return (<div className={styles.barPercent}>
    <div className={styles["bar-bd"]}>
      <div className={styles['bar-value']} style={{width: `${data}%`, backgroundColor: color}}></div>
      <div className={styles['bar-mask']}></div>
      <div className={styles["flag"]} style={{left: `${flag.value}%`}}></div>
      <div className={styles["flag-txt"]} style={{right: `${100-flag.value}%`}}>{ flag.text }</div>
    </div>
    <div className={styles['value']}>超过<span className={styles.big}>{ data }%</span>的同龄人</div>
  </div>)
}
export default BarPercentCompare