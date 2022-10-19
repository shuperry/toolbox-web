import React from 'react'

import Img from '@/components/img'

import styles from './index.less'

export default ({ children, blank, logoType }) => {
  if (blank) {
    return (
      <div className={styles.warp} style={{ padding: 0 }}>
        {children}
      </div>
    )
  }
  return (
    <div className={styles.warp} id="pdf">
      {children}
      <div className={styles.fixbottom} id="fixPage">
        <div id="name"></div>
        <div id="page"></div>
      </div>
    </div>
  )
}
