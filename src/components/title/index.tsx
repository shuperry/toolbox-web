import { FC } from 'react'

import styles from './index.less'

type PropType = {
  title: string
}

const Title: FC<PropType> = ({ title }) => {
  if (!title) return <></>

  return <div className={styles['title-wrapper']}>{title}</div>
}

export default Title
