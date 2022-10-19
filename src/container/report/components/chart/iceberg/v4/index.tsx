import React, { FC } from 'react'
import classnames from 'classnames'

import Img from '@/components/img'

import SingleValItemComp from '../single-val-item'

import { ChartIceBergPropType } from '../../types'

import styles from './index.less'

// 各数据与冰山连接线条相关配置.
const valNameLineConf = [
  {
    name: '成长环境',
    nameStyle: {
      left: '20px',
      top: '657px',
    },

    lineImg: '/images/iceberg/type-4/env-val-line.png',
    lineStyle: {
      left: '24px',
      top: '686px',
      height: '126px',
    },
  },
  {
    name: '学习表现',
    nameStyle: {
      left: '183px',
      top: '239px',
    },

    lineImg: '/images/iceberg/type-4/val-line-1.png',
    lineStyle: {
      left: '269px',
      top: '68px',
      width: '194px',
      height: '181px',
    },
  },
  {
    name: '学习执行力',
    nameStyle: {
      left: '175px',
      top: '362px',
    },

    lineImg: '/images/iceberg/type-4/val-line-2.png',
    lineStyle: {
      left: '269px',
      top: '249px',
      width: '194px',
      height: '126px',
    },
  },
  {
    name: '学习能力',
    nameStyle: {
      left: '183px',
      top: '428px',
    },
  },
  {
    name: '学习动力',
    nameStyle: {
      left: '183px',
      top: '494px',
    },

    lineImg: '/images/iceberg/type-4/val-line-3.png',
    lineStyle: {
      left: '272px',
      top: '461px',
      width: '191px',
      height: '45px',
    },
  },
  {
    name: '卓越学习力',
    nameStyle: {
      left: '175px',
      top: '562px',
    },

    lineImg: '/images/iceberg/type-4/val-line-4.png',
    lineStyle: {
      left: '272px',
      top: '572px',
      width: '191px',
      height: '120px',
    },
  },
]

/**
 * 冰山图-3.
 *
 * @name chartIceBerg_3
 * @param {
 *    Array<{
 *      title: string; // 数据标题.
 *      values: Array<{ // 数据细项, 格式: 数组.
 *        name: string; // 数据细项名称.
 *        type: 'string' | 'number' | 'percent'; // 数据细项类型, 支持: string (数字), number (数字), percent (百分比).
 *        val: string | number; // 数据细项值, 支持类型: 字符串, 数字.
 *        stringValColor?: 'red' | 'orange' | 'yellow' | 'green' | 'dark-green'; // 数据细项值为字符串时, 显示的颜色类型, 支持: red | orange | yellow | green | dark-green.
 *        markVal: number; // 数据细项标准线位置.
 *      }>
 *    }>
 * } data 要渲染的数据.
 */
const ChartIceBerg: FC<ChartIceBergPropType.PropType> = ({ data = [] }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!Array.isArray(data) || !data.length) return <></>

  return (
    <div className={styles.container}>
      <div className={styles['flex-container']}>
        <div className={styles['ice-env-val-container']}>
          <div className={styles['iceberg-container']}>
            <div className={styles['iceberg-green-bg']}>
              <Img src="/images/iceberg/iceberg.png" className={styles['iceberg-img']} />

              {/* 各数据 */}
              {valNameLineConf
                .filter((item) => item.lineImg)
                .map((item, idx) => (
                  <Img
                    key={`val-line-img-${idx}`}
                    src={item.lineImg}
                    className={styles['val-line-img']}
                    style={item.lineStyle}
                  />
                ))}

              {valNameLineConf.map((item, idx) => (
                <div key={`val-name-container-${idx}`} className={styles['val-name-container']} style={item.nameStyle}>
                  <span className={styles['val-name']}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={classnames(styles['val-container'], styles['mt-26'])}>
            <div className={styles['val-title-container']}>
              <div className={styles.title}>{data[0].title}</div>
            </div>

            <div className={styles['val-content-container']}>
              {Array.isArray(data[0].values) &&
                data[0].values.map((item2, idx2) => (
                  <div key={`val-content-0-val-item-${idx2}`} className={styles['val-item']}>
                    <div className={styles.name}>{item2.name}</div>
                    <SingleValItemComp
                      val={item2.val}
                      markVal={item2.markVal}
                      stringValColor={item2.stringValColor}
                      _for="v3-6"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className={styles['val-areas-container']}>
          {data
            .filter((item) => item.title !== '成长环境')
            .map((item1, idx1) => (
              <div key={`val-container-${idx1}`} className={styles['val-container']}>
                <div className={styles['val-title-container']}>
                  <div className={styles.title}>{item1.title}</div>
                </div>

                <div className={styles['val-content-container']}>
                  {Array.isArray(item1.values) &&
                    item1.values.map((item2, idx2) => (
                      <div key={`val-content-${idx1}-val-item-${idx2}`} className={styles['val-item']}>
                        <div className={styles.name}>{item2.name}</div>
                        <SingleValItemComp
                          val={item2.val}
                          markVal={item2.markVal}
                          stringValColor={item2.stringValColor}
                          _for="v3-6"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.tip}>注：图中存在冲突程度的指标为家长与学生评估不一致的指标。</div>
    </div>
  )
}

export default ChartIceBerg
