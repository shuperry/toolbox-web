import React, { FC } from 'react'
import styles from './index.less'
import { ChartBarCodeDisc as PropType } from '../types'
import classnames from 'classnames'
import Img from '@/components/img'

const wholeMarkWidth = 330

const colors = ['#ff0100', '#fca908', '#00b04f', '#01b1f2']

/**
 * DISC 条形代码图 - disc.
 *
 * @param {
 * Array<{
 *   label: Array<{
 *     title: string;
 *     word: string;
 *   }>;
 *   value: number; // 数值范围 1 ~ -1.
 * }>} data 详细数据
 */
const BarCode2: FC<PropType> = ({ data }) => {
  return (
    <>
      <div className={styles.barCode}>
        {data.map((d, idx) => (
          <div key={`bar-item-${idx}`} className={styles['bar-item']}>
            <div className={styles['label-1']}>
              {d.label[0].title && <span className={styles.title}>{d.label[0].title}</span>}
              <span className={styles.word}>{d.label[0].word}</span>
            </div>
            <div className={styles['item-bd']}>
              <div
                className={classnames(styles['bd-content'], {
                  [styles.left]: d.value > 0,
                  [styles.right]: d.value < 0,
                })}
                style={{
                  width: `${wholeMarkWidth * Math.abs(d.value)}px`,
                  backgroundColor: colors[idx],
                }}
              ></div>
            </div>
            <div className={styles['label-2']}>
              <span className={styles.word}>{d.label[1].word}</span>
              {d.label[1].title && <span className={styles.title}>{d.label[1].title}</span>}
            </div>
          </div>
        ))}
        <div className={styles.tc}>
          <Img className={styles['bottom-img']} src="/images/report/barCode_disc_mark.png" alt="" />
        </div>
      </div>
    </>
  )
}
export default BarCode2
