import React, { FC } from 'react'
import styles from './index.less'
import { ChartBarCode2 as PropType } from '../types'
import classnames from 'classnames'
import Img from '@/components/img'

/**
 * 条形代码图
 *
 * @param {string} id 数据唯一标志
 * @param {number} [total=34] 数据的统一上限值,默认34
 * @param {object} data 详细数据
 * @param {string} data[].label 数据标签
 * @param {number} data[].value 数据数值
 */
const BarCode2: FC<PropType> = ({ data }) => {
  const levels = {
    '1': '55px',
    '2': '165px',
    '3': '285px',
    '4': '330px',
  }
  const colors = {
    '1': '#FFC600',
    '2': '#FF961F',
    '3': '#44B979',
    '4': '#2C88FA',
  }
  return (
    <>
      <div className={styles.barCode}>
        {data.map((d, idx) => (
          <div key={`bar-item-${idx}`} className={styles['bar-item']}>
            <div className={styles['label-1']}>
              {d.label[0].title}
              <span>{d.label[0].word}</span>
            </div>
            <div className={styles['item-bd']}>
              <div
                className={classnames(styles['bd-content'], styles[d.value.direction])}
                style={{ width: levels[d.value.value], backgroundColor: colors[d.value.value] }}
              ></div>
            </div>
            <div className={styles['label-2']}>
              <span>{d.label[1].word}</span>
              {d.label[1].title}
            </div>
          </div>
        ))}
        <div className={styles.tc}>
          <Img className={styles['bottom-img']} src="/images/report/barCode2_bot.png" alt="" />
        </div>
      </div>
    </>
  )
}
export default BarCode2
