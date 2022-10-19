import { FC } from 'react'
import classnames from 'classnames'
import { isObject, times } from 'lodash-es'

import { ChartCareerAnchorScorePropType } from '../types'

import styles from './index.less'

const colors = ['#F88558', '#44B979']

// 横坐标刻度数字间隔.
const defTimes = 5

// 横坐标最大刻度值.
const defMaxStickVal = 45

const get5TimesMaxStickVal = (val: number): number => {
  if (!val) {
    return defMaxStickVal
  }

  return val % defTimes ? defTimes * Math.ceil(val / defTimes) : val
}

const getStickVals = (val: number): number[] => {
  const arr: number[] = []

  times(val + 1, (v) => {
    if (v % defTimes === 0) arr.push(v)
  })

  return arr
}

const ChartCareerAnchor: FC<ChartCareerAnchorScorePropType> = ({ data }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!isObject(data) || !Array.isArray(data.values) || data.values.length === 0) {
    return <></>
  }

  const maxStickVal = get5TimesMaxStickVal(data.maxScore)
  const stickVals = getStickVals(data.maxScore)
  const hasDesc = !!data.desc

  return (
    <div className={classnames(styles['chart-container'], { [styles['has-desc']]: hasDesc })}>
      <div className={styles.header}>
        <span className={styles.title}>{data.title}</span>

        {(data.legends || []).length > 0 && (
          <div className={styles['legend-container']}>
            {(data.legends || []).map((item, idx) => (
              <div key={`career-anchor-score-legend-item-${item}-${idx}`} className={styles['legend-item']}>
                <div style={{ backgroundColor: colors[idx] }} className={styles.dot}></div>
                <span className={styles.text}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles['scores-container']}>
        {data.values.map((v, i) => (
          <div key={`career-anchor-scores-${v.normScore}-${v.score}-${i}`} className={styles['scores-item']}>
            <div className={styles['label-container']}>
              <span className={styles['label-text']}>{v.label}</span>
              <span className={classnames(styles['diff-num-text'], styles[`c-${v.color}`])}>{v.diffNum}</span>
            </div>
            <div className={styles.vals}>
              <div
                className={styles['score-container']}
                style={{ width: `${((v.score / maxStickVal) * 100).toFixed(2)}%` }}
              ></div>
              <span
                className={styles['score-val']}
                style={{
                  left:
                    v.score >= 10
                      ? `calc(${((v.score / maxStickVal) * 100).toFixed(2)}% - 35px)`
                      : `calc(${((v.score / maxStickVal) * 100).toFixed(2)}% - 30px)`,
                }}
              >
                {v.score}
              </span>

              <div
                className={styles['norm-score-container']}
                style={{ width: `${((v.normScore / maxStickVal) * 100).toFixed(2)}%` }}
              ></div>

              <span
                className={styles['norm-score-val']}
                style={{
                  left:
                    v.normScore >= v.score
                      ? `calc(${((v.normScore / maxStickVal) * 100).toFixed(2)}% + 10px)`
                      : `calc(${((v.normScore / maxStickVal) * 100).toFixed(2)}% - 35px)`,
                }}
              >
                {v.normScore}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['stick-container']}>
        {stickVals.map((v, i) => (
          <span key={`career-anchor-score-stick-item-${v}-${i}`} className={styles['stick-val']}>
            {v}
          </span>
        ))}
      </div>

      {data.desc && <div className={styles.desc}>{data.desc}</div>}
    </div>
  )
}

export default ChartCareerAnchor
