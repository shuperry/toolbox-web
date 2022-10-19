import { FC } from 'react'
import classnames from 'classnames'
import { toNumber } from 'lodash-es'

import styles from './index.less'

type numOfUndef = number | null | undefined

type ColorType = 'red' | 'orange' | 'yellow' | 'green' | 'dark-green'

interface PropType {
  size: number // 需要等分的份数.
  val: number // 需要高亮显示色值的份数.
  color: ColorType // 高亮色值.
}

/**
 * 根据最小值和最小值生成两个数字之间的数字数组.
 *
 * @param {number} max 最大值.
 * @param {number?} [min=1] 最小值.
 *
 * @returns [min ... max]
 */
const genNumArr = (max: number, min: numOfUndef = 1): number[] => {
  if (toNumber(min) > max) {
    throw new Error('生成数字数组错误, 最小值不能大于最大值')
  }

  const nums = []
  for (let n = min || 0; n <= max; n++) {
    nums.push(n)
  }

  return nums
}

/**
 * 需要显示多份等分的颜色条, 用于展示百分比数值.
 *
 * @param {number} size 需要等分的份数.
 * @param {number} val 需要显示色值的份数.
 * @param {'red' | 'orange' | 'yellow' | 'green' | 'dark-green'} color 高亮色值.
 */
const SplitValItem: FC<PropType> = ({ size = 1, val = 0, color = 'green' }) => {
  const nums = genNumArr(size)

  return (
    <div className={styles.container}>
      {nums.map((v, i) => (
        <div
          key={i + 1}
          className={classnames(styles.item, { [styles[color]]: v <= val }, { [styles['not-active']]: v > val })}
          style={{ width: `${Number((1 / size).toFixed(2)) * 100}%` }}
        ></div>
      ))}
    </div>
  )
}

export default SplitValItem
