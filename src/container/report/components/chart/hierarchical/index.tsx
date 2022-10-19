import React, { FC } from 'react'
import styles from './index.less'
import cStyles from './chart.less'
import Img from '@/components/img'

const CirCle = ({ value = 20 }) => {
  let l = 0
  let r = 0
  if (value < 50) {
    l = 180 - (value / 50) * 180
    r = 180
  } else {
    l = 0
    r = 180 - ((value - 50) / 50) * 180
  }
  return (
    <div className={cStyles['loading']}>
      <div className={cStyles['left']}>
        <div
          className={cStyles['la']}
          style={{
            transform: `rotateZ(${l}deg)`,
          }}
        ></div>
      </div>
      <div className={cStyles['right']}>
        <div
          className={cStyles['ra']}
          style={{
            transform: `rotateZ(${r}deg)`,
          }}
        ></div>
      </div>
      <div className={cStyles['progress']}>{value}%</div>
    </div>
  )
}

/**
 * 马斯洛需求层次模型图.
 */
const Hierarchical: FC<any> = ({ data }) => {
  return (
    <div className={styles.box}>
      <Img src="/images/report/img_hierarchical.png" alt="" className={styles['image-hierarchical']} />
      <div className={styles.right}>
        {data.map((v: number | undefined, i: number) => (
          <CirCle key={i + 1} value={v} />
        ))}
      </div>
    </div>
  )
}
export default Hierarchical
