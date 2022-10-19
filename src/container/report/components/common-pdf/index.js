import React from 'react'
import PdfPaper from '@/container/report/components/pdf-paper'

import ModuleItem from './module-item'

import styles from './index.less'

export default ({ data, dataInit, userInfo }) => {
  return dataInit ? (
    <>
      {data.map((list, idx1) => (
        <PdfPaper key={`pdf-paper-${idx1}`}>
          {(Array.isArray(list) ? list : []).map((item, idx2) => (
            <ModuleItem userInfo={userInfo} key={`pdf-paper--${idx1}-module-item-${idx2}`} item={item} />
          ))}
        </PdfPaper>
      ))}
    </>
  ) : (
    <div className={styles.container}>
      {data.map((item, idx) => (
        <ModuleItem userInfo={userInfo} key={`module-item-${idx}`} item={item} />
      ))}
    </div>
  )
}
