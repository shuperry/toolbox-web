import React, { FC } from 'react'
import classnames from 'classnames'

import Img from '@/components/img'

import SplitValItemComp from '../split-val-item'
import SingleValItemComp from '../single-val-item'

import { ChartIceBergPropType } from '../../types'

import styles from './index.less'

// 冰山中各数据状态与图标映射配置.
const valStatusIconConf = {
  excellent: '/images/iceberg/right-circle-green.png',
  warning: '/images/iceberg/warning-cicle-orange.png',
  bad: '/images/iceberg/danger-cicle-red.png',
}

// 环境影响数据线配置.
const envValLineStyle = {
  height: '475px',
  top: '95px',
  left: '47px',
}

// 各数据与冰山连接线条相关配置.
const valNameLineConf = [
  {
    img: '/images/iceberg/val-line-1.png',
    nameTop: 170,
    style: {
      top: '28px',
      left: '310px',
      height: '153px',
    },
  },
  {
    img: '/images/iceberg/val-line-2.png',
    nameTop: 210,
    style: {
      top: '138px',
      left: '307px',
      height: '82px',
    },
  },
  {
    img: '/images/iceberg/val-line-3.png',
    nameTop: 280,
    style: {
      top: '285px',
      left: '310px',
      width: '132px',
    },
  },
  {
    img: '/images/iceberg/val-line-4.png',
    nameTop: 350,
    style: {
      top: '370px',
      left: '310px',
      width: '132px',
    },
  },
  {
    img: '/images/iceberg/val-line-5.png',
    nameTop: 420,
    style: {
      top: '428px',
      left: '310px',
      width: '132px',
    },
  },
]

/**
 * 冰山图.
 *
 * @name chartIceBerg
 * @param {
 *    Array<{
 *      title: string; // 数据标题.
 *      status: 'excellent' | 'warning' | 'bad'; // 数据状态, 支持: excellent (优秀), warning (警告), bad (较差).
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
      {/* 各数据值与冰山连线  */}
      <Img src="/images/iceberg/env-val-line.png" className={styles['val-line-img']} style={envValLineStyle} />

      <div className={styles['ice-env-val-container']}>
        <div className={styles['iceberg-container']}>
          <Img src="/images/iceberg/iceberg.png" className={styles['iceberg-img']} />

          <div className={styles['iceberg-green-bg']}>
            <div
              className={styles['val-name-container']}
              style={{
                top: 30,
                left: 10,
              }}
            >
              <Img src="/images/iceberg/right-circle-green.png" className={styles['icon']} />
              <span className={styles['val-name']}>环境影响</span>
            </div>

            {/* 各数据 */}
            {valNameLineConf
              .filter((item) => item.img)
              .map((item, idx) => (
                <Img key={`val-line-img-${idx}`} src={item.img} className={styles['val-line-img']} style={item.style} />
              ))}

            {data.map((item, idx) => (
              <div
                key={`val-name-container-${idx}`}
                className={styles['val-name-container']}
                style={{
                  top: valNameLineConf[idx].nameTop,
                  left: '50%',
                }}
              >
                <Img src={valStatusIconConf[item.status]} className={styles['icon']} />
                <span className={styles['val-name']}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['env-val-container']}>
          <div className={styles['env-val-title-container']}>
            <div className={styles.title}>环境影响</div>
            <div className={styles['standard-container']}>
              <div className={styles['standard-item-container']}>
                <div className={classnames(styles['standard-item'], styles['red'])}></div>
                <div className={classnames(styles['standard-item'], styles['orange'])}></div>
                <div className={classnames(styles['standard-item'], styles['yellow'])}></div>
                <div className={classnames(styles['standard-item'], styles['green'])}></div>
                <div className={classnames(styles['standard-item'], styles['dark-green'])}></div>
              </div>
              <div className={styles['standard-label-container']}>
                <span className={styles['standard-label']}>负向</span>
                <span className={styles['standard-label']}>中性</span>
                <span className={styles['standard-label']}>正向</span>
              </div>
            </div>
          </div>
          <div className={styles['env-val-content-container']}>
            <div className={styles['env-val-item']}>
              <div className={styles.name}>家庭影响度</div>
              <SplitValItemComp size={5} val={1} color="red" />
            </div>
            <div className={styles['env-val-item']}>
              <div className={styles.name}>学校影响度</div>
              <SplitValItemComp size={5} val={3} color="orange" />
            </div>
            <div className={styles['env-val-item']}>
              <div className={styles.name}>恋爱影响度</div>
              <SplitValItemComp size={5} val={2} color="green" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['val-areas-container']}>
        {data.map((item1, idx1) => (
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
                      _for="v1-2"
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChartIceBerg
