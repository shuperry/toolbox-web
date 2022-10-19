import { FC } from 'react'
import classnames from 'classnames'

import styles from './index.less'

type PropType = {
  data: Array<{
    text: string
    color: 'red' | 'orange' | 'green'
  }>
}

/**
 * 带颜色的标签.
 *
 * @param {Array<{ text: string; color: 'red' | 'orange' | 'green' }>} data 标签数据.
 */
const ColorTags: FC<PropType> = ({ data = [] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['tags-container']}>
        {(data || []).map((item, idx) => (
          <div key={`color-tag-${idx}`} className={classnames(styles.tag, styles[`bg-c-${item.color}`])}>
            <span className={classnames(styles.text, styles[`c-${item.color}`])}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorTags
