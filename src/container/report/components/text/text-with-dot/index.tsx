import React, { FC } from 'react'
import classnames from 'classnames'

import styles from './index.less'

interface IndexProps {
  data: object[]
  dotColor: string
}

const Index: FC<IndexProps> = ({ data, dotColor = 'green' }) => {
  return (
    <ul className={styles.wrapper}>
      {(data || []).map((v, i) => (
        <li key={i} className={styles.li}>
          <span className={classnames(styles.dot, styles[dotColor])} />
          <span className={styles.content}>{v}</span>
        </li>
      ))}
    </ul>
  )
}

export default Index
