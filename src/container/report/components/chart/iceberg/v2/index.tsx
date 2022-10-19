import React, { FC } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

import Img from '@/components/img'

import { ChartIceBerg2PropType } from '../../types'

import styles from './index.less'

// 数值区间与颜色映射表.
const colorTypeConf = {
  red: {
    color: '#FF3837',
    range: [0, 27],
  },
  orange: {
    color: '#FF8700',
    range: [27, 49],
  },
  yellow: {
    color: '#ffc600',
    range: [49, 76],
  },
  green: {
    color: '#44B979',
    range: [76, 93],
  },
  'dark-green': {
    color: '#269250',
    range: [93, 99],
  },
}

const defTopPosition = '75px'
const valTopPositionConf = {
  成长环境: '75px',
  学习表现: '181px',
  学习执行力: '315px',
  学习能力: '396px',
  学习动力: '473px',
  卓越学习力: '550px',
}

const getColorByVal = (val: number): string => {
  for (let i = 0, k, colorRange; i < Object.keys(colorTypeConf).length; i++) {
    k = Object.keys(colorTypeConf)[i]
    colorRange = colorTypeConf[k].range

    if (colorRange[0] < val && val <= colorRange[1]) {
      return k
    }
  }

  return ''
}

const ChartIceBerg2: FC<ChartIceBerg2PropType> = ({ data }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!data || _.isEmpty(data) || !_.isArray(data.values) || data.values.length === 0) return <></>

  // 是否使用短线连接.
  const isShortLine = data.title === '成长环境' || !_.keys(valTopPositionConf).includes(data.title)

  return (
    <div className={styles.container}>
      <Img src="/images/iceberg/iceberg-2.png" className={styles['iceberg-img']} />

      <div
        className={styles['values-line-container']}
        style={{ top: valTopPositionConf[data.title] || defTopPosition }}
      >
        {valTopPositionConf[data.title] && (
          <Img
            src={!isShortLine ? '/images/iceberg/line-2.png' : '/images/iceberg/line-2-short.png'}
            className={classnames(styles['line'], { [styles.short]: isShortLine })}
          />
        )}
        <div className={styles['values-container']}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.values}>
            {data.values.map((item, idx) => {
              const percentChat = (typeof item.val === 'number' ? item.type || 'percent' : '') === 'percent' ? '%' : ''

              return (
                <div key={`${item.name}-${idx}`} className={styles['value-item']}>
                  <div className={styles.label}>{item.name}</div>
                  <div
                    className={classnames(styles.value, {
                      [typeof item.val === 'number' ? styles[`c-${getColorByVal(item.val)}`] : '']:
                        typeof item.val === 'number',
                    })}
                  >
                    {item.val}
                    {percentChat}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.tip}>
        注：图中百分数得分表示你超越了百分之多少的同龄人，比如“62% 那说明在此方面你超过了62%的学生”。
      </div>
    </div>
  )
}

export default ChartIceBerg2
