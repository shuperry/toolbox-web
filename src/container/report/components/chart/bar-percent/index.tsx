import React, { FC } from 'react';
import { ChartBarPercent as PropType } from '../types';
import styles from './index.less';

const getColor = (val: number) => {
  if (val >= 94) {
    return '#44B979';
  } else if (val >= 77) {
    return '#7CD762';
  } else if (val >= 50) {
    return '#FCC644';
  } else if (val >= 28) {
    return '#FD9B40';
  } else {
    return '#FD6E49';
  }
};

/**
 * 条形图（按百分比变化颜色）, 颜色分为 5 档.
 *
 * 0-27，28-49，50-76，77-93，94-100.
 *
 * @param {number} data 详细数据, 数值范围 0 - 100.
 * @param {string?} title 数据标题.
 */
const BarPercent: FC<PropType> = ({ data, title }) => {
  return (
    <div className={styles.barPercent}>
      {title && <span className={styles.title}>{title}</span>}

      <div className={styles['bar-bd']} style={{ width: title ? '700px' : '820px' }}>
        <div
          className={styles['bar-value']}
          style={{ width: `${data}%`, backgroundColor: getColor(data) }}
        ></div>
        <div className={styles['bar-mask']}></div>
      </div>
      <div className={styles['value']}>{data}%</div>
    </div>
  );
};
export default BarPercent;
