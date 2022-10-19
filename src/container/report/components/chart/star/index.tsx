import React, { FC } from 'react'
import _ from 'lodash'

import Img from '@/components/img'

import { ChartStarPropType } from '../types'
import StarItem from '../common/star-item'

import styles from './index.less'

const titleStarDescConf = ['很不满意', '不大满意', '还行', '比较满意', '非常满意']

const valueStarDescConf = [
  '排名靠后（后90%）',
  '中等偏下（70%-90%）',
  '中等（30%-70%）',
  '中等偏上（10%-30%）',
  '名列前茅（前10%）',
]

/**
 * 星星图.
 *
 * @name chartStar
 * @param {
 *    data: {
 *      title: string; // 标题.
 *      star: StarType; // 总星数.
 *      valuesTitle?: string; // 各数值总标题.
 *      values: Array<{
 *        label: string; // 标题.
 *        star: StarType;
 *      }>;
 *    }
 * } data 要渲染的数据.
 * @param userInfo 用户信息, gender: 1 (男), 2 (女).
 */
const ChartStar: FC<ChartStarPropType.PropType> = ({ data, userInfo }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (_.isEmpty(data)) return <></>

  return (
    <div className={styles.container}>
      <div className={styles['avatar-title-container']}>
        <Img
          src={`/images/star/${(userInfo?.gender || 1) === 1 ? 'male' : 'female'}.png`}
          className={styles['avatar']}
        />

        <div className={styles['title-container']}>
          <span className={styles.title}>学习现状满意度</span>
          <StarItem label="" star={data.star} isTitle={true} descConf={titleStarDescConf} />
        </div>
      </div>
      {_.isArray(data.values) && data.values.length > 0 && (
        <div className={styles['values-container']}>
          <span className={styles['values-title']}>{data.valuesTitle}</span>
          <div className={styles['values']}>
            {data.values.map((item, idx) => (
              <StarItem
                key={`${item.label}-${idx + 1}`}
                label={item.label}
                star={item.star}
                descConf={valueStarDescConf}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChartStar
