import React from 'react'
import Img from '@/components/img'

import styles from './index.less'

export default ({ title, content, style }) => {
  return (
    <div style={style} className={styles.wrapper}>
      <div className={styles.head} style={content ? {} : { margin: 0 }}>
        <Img src="/images/report/left.png" className={styles.img} />
        <span className={styles.title}>{title}</span>
        <Img src="/images/report/right.png" className={styles.img} />
      </div>
      {content ? (
        <div className={styles.content}>
          {(Array.isArray(content) ? content : (content || '').split('<br />')).map((v) => (
            <div className={styles.text}>{v}</div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
