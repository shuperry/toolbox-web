import React, { FC } from 'react'

import Hexagon from '../hexagon'
import styles from './index.less'

interface IndexProps {
  bgColor: string
  textColor?: string
  text: string
  data: string[]
  num: number
  desc: string
}

const Index: FC<IndexProps> = ({ bgColor = 'green', textColor, text, data, num, desc }) => {
  return (
    <div className={styles['explain7-box']}>
      <Hexagon bgColor={bgColor} textColor={bgColor === 'grey' ? 'black' : 'white'} text={text} />
      <div className={styles['content-wrap']}>
        <div className={styles.title}>
          你的指数：<span className={styles[bgColor]}>{num}</span>
          <div className={styles.right}>{desc}</div>
        </div>
        {data.map((item, idx) => (
          <div key={`${item}-${idx}`} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
