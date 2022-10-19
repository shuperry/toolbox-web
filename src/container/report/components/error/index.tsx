import { FC } from 'react'
import Img from '@/components/img'
import styles from './index.less'
interface IndexProps {
  title1: string
  title2: string
  data1: []
  data2: []
}

const Index: FC<IndexProps> = ({ title1, data1, title2, data2 }) => {
  console.log('into error component')

  return (
    <div className={styles.wrap}>
      <div className={styles['error-container']}>
        <div className={styles['error-gray-bg']}>
          <Img className={styles['error-icon']} src={'/images/report/report-error.png'} />
          <span className={styles['error-title']}>{title1}</span>
          <div className={styles['tag-container']}>
            {data1?.map((item) => (
              <span className={styles['tag-item']}>{item}</span>
            ))}
          </div>
        </div>
        <div className={styles['bottom-container']}>
          <span className={styles['desc-title']}>{title2}</span>
          <div className={styles['desc-container']}>
            {data2?.map((item) => (
              <span className={styles['desc-item']}>{item}</span>
            ))}
          </div>
          <span className={styles['desc-tip']}>如果确认以上指导都已经做到，建议可以重新参加测评！</span>
        </div>
      </div>
    </div>
  )
}

export default Index
