import React, { FC } from 'react'
import styles from './index.less'
import classNames from 'classnames'

/**
 * 偏好图
 *
 * @param {string} data 偏好关键词，可选范围[Auditory,Kinesthetic,Vusual,Writing]
 */
const Preference: FC<{data: string}> = ({data}) => {
  return (<>
    <div className={styles.preferenceBox}>
      <div className={classNames(styles["preference-img"], styles[data])} ></div>
    </div>
  </>)
}
export default Preference
