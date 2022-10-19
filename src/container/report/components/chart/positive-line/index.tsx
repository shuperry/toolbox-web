import React, { Fragment, FC } from 'react'
import { PositiveLine as PropType } from '../types'
import styles from './index.less'
/**
   * 阳型线常模图
   *
   * @param {string|number} id 数据的唯一标识符
   * @param {object[]} data 详细数据
   * @param {string} data[].label 数据标签
   * @param {number[]} data[].model 模态范围，[0.5, 1.58]
   * @param {number} data[].value 具体数值
   */
const PositiveLine: FC<PropType> = ({ data }) => {
  // 先取最大值
  let max = 3.5
  data.forEach(d => {
    if (d.value > max) {
      max = d.value
    }
  });
  const ceilCount = []
  for (let k = 0; k < max / 0.5; k++){
    ceilCount.push(1)
  }
  const GetModel = ({t}) => {
    if (!t.model) {
      return null
    }
    return (<div
      className={styles.model}
      style={{
        width: `${(t.model[1] - t.model[0])/(ceilCount.length/2)*100}%`,
        left: `calc(2px + ${t.model[0]/(ceilCount.length/2)*100}%)`
      }}></div>)
  }
  return (<>
    <div className={styles['positive-line-box']}>
      <div className={styles['hd']}>
        <div className={styles['title']}>指标分数</div>
        <div className={styles['legend']}>
          <div className={styles['legend-item']}>
            <span className={styles['l-sq']}></span>
            常模
          </div>
          <div className={styles['legend-item']}>
            <span className={styles['l-line']}></span>
            阳性线
          </div>
        </div>
      </div>
      <div className={styles['bd']}>
        {data.map((t, index) => (<Fragment key={index + 1}>
          <div className={styles['bd-item']}>
            <div className={styles['bd-item-title']}>{t.label}</div>
            <div className={styles['bd-item-grid']}>
              {ceilCount.map((n,j) => <div className={styles['grid-ceil']} key={`gc_${index+1}_${j+1}`}></div>)}
              <div className={styles['last-line']}></div>
              <GetModel t={t}></GetModel>
              <div className={styles.bar} style={{ width: `${719 * (t.value/(ceilCount.length/2))}px`}}></div>
              <div className={styles.value}>{ t.value }</div>
            </div>
          </div>
          {data.length-1!==index && <div className={styles['bd-gap']}>
            <div className={styles['bd-gap-grid']}>
              {ceilCount.map((n,j) => <div className={styles['gap-ceil']} key={`gapc_${index+1}_${j+1}`}></div>)}
              <div className={styles['gap-last-line']}></div>
            </div>
          </div>}
        </Fragment>))}
        <div className={styles['line-yang']} style={{ left: `${4 / ceilCount.length * 721 + 138}px` }}></div>
      </div>
    </div>
  </>)
}

export default PositiveLine
