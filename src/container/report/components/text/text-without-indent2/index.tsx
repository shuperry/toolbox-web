import { FC } from 'react'

import styles from './index.less'

interface IndexProps {
  data: string[]
}
const Index: FC<IndexProps> = ({ data }) => {
  return (
    <div className={styles.wrap}>
      {data.map((item) => (
        <div className={styles.line} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </div>
  )
}

export default Index
