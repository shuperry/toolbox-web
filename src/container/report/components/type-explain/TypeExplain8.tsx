import { FC } from 'react'

import Hexagon from '../hexagon'
import styles from './index.less'

interface IndexProps {
  bgColor: string
  textColor?: string
  text: string
  data: string[]
  desc: string
  descColor?: string
}

const Index: FC<IndexProps> = ({ bgColor, textColor, text, data, desc, descColor }) => {
  return (
    <div className={styles['explain8-box']}>
      <Hexagon bgColor={bgColor} textColor={bgColor === 'white' ? 'black' : 'white'} text={text} />
      <div className={styles['content-wrap']}>
        <div className={styles.title}>
          <span className={styles[bgColor]}>{desc}</span>
        </div>
        {(data || []).map((item, idx) => (
          <div key={`${item}-${idx}`} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
