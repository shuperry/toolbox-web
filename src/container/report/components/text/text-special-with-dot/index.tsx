import { FC, Fragment } from 'react'

import styles from './index.less'

interface IndexProps {
  data: string[]
  dotColor: string
}

const Index: FC<IndexProps> = ({ data, dotColor }) => {
  const _dotColor = dotColor || 'green'

  return (
    <div className={styles.box}>
      <span className={styles[_dotColor]} />
      {(data || []).map((item, index) => (
        <Fragment key={index}>
          {index !== 0 && <div className={styles.line} />}
          <div className={styles.item}>{item}</div>
        </Fragment>
      ))}
    </div>
  )
}

export default Index
