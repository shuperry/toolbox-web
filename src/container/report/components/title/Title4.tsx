import { FC } from 'react'
import classnames from 'classnames'

import styles from './index.less'

interface IndexProps {
  title: string
  color: string
  align: 'left' | 'center' | 'right'
}

const Index: FC<IndexProps> = ({ title, color, align }) => {
  const _color = color || 'black'
  const _align = align || 'left'

  return (
    <div className={classnames(styles['title4-wrapper'], styles[_color])} style={{ textAlign: _align }}>
      {title}
    </div>
  )
}

export default Index
