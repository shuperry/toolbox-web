import React from 'react'
import styles from './index.less'

export default ({ title, extra, style }) => {
  return (
    <div className={styles.wrapper} style={style}>
      <span>{title}</span>
      {extra ? <span className={styles.span}>{extra}</span> : null}
    </div>
  )
}
