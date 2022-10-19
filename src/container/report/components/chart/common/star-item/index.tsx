import classnames from 'classnames'
import _ from 'lodash'

import Img from '@/components/img'

import { ChartStarPropType } from '../../types'

import styles from './index.less'

const maxStar = 5

/**
 * 单个星星组件.
 *
 * @name chartStar
 * @param {
 *    data: {
 *      label: string; // 标题.
 *      star: 1 | 2 | 3 | 4 | 5; // 总星数.
 *      isTitle?: boolean; // 是否标题.
 *      isSingle?: boolean; // 是否单个星星图.
 *      descConf: string[]; // 各星对应描述语.
 *    }
 * } data 要渲染的数据.
 * @param userInfo 用户信息, gender: 1 (男), 2 (女).
 */
const StarItem = ({
  label,
  star,
  isTitle,
  isSingle,
  descConf,
}: {
  label: string
  star: ChartStarPropType.StarType
  isTitle?: boolean
  isSingle?: boolean
  descConf: string[]
}) => (
  <div
    className={classnames(
      styles.stars,
      { [styles['mt']]: !isSingle },
      { [styles['title-star']]: isTitle },
      { [styles['value-item']]: !isTitle },
    )}
  >
    {label && <span className={styles.label}>{label}</span>}

    {_.times(star, (item) => (
      <Img key={`star-green-${item}`} src="/images/star/star-green.png" className={styles['star']} />
    ))}

    {_.times(maxStar - star, (item) => (
      <Img key={`star-${item}`} src="/images/star/star.png" className={styles['star']} />
    ))}

    <span className={styles['star-desc']}>{descConf[star - 1]}</span>
  </div>
)

export default StarItem
