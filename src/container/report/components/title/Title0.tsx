import { FC } from 'react'

import Img from '@/components/img'
import styles from './index.less'

interface IndexProps {
  title: string
}

const Index: FC<IndexProps> = ({ title }) => {
  return (
    <div className={styles['title0-wrapper']}>
      <div className={styles.head}>
        <Img src="/images/report/left.png" className={styles.img} />
        <span className={styles.title}>{title}</span>
        <Img src="/images/report/right.png" className={styles.img} />
      </div>
    </div>
  )
}

export default Index
