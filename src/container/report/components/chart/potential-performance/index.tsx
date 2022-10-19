import React, { FC } from 'react';
import styles from './index.less';

/**
 * 潜能表现图
 *
 * @param {object} conf 图表基本数据
 * @param {string|number} conf.id 数据的唯一标识符
 * @param {number[]} conf.data 详细数据, 请严格按照以下顺序返回[类同，理解与常识，图画概念，矩阵推理，填图，背数，算数，译码，符号检索，划消]
 */
const PotentialPerformance: FC<{ data: number[] }> = ({ data }) => {
  const nums = data.map((d) => Number(d));
  return (
    <>
      <div className={styles.box}>
        <div className={styles['title']}>我的智能表现</div>
        <div className={styles['bd']}>
          {nums.map((v, idx) => (
            <div
              key={idx + 1}
              className={styles.block}
              style={{ height: `${21.4 * Math.max(Math.min(v, 20), 0)}px` }}
            >
              <div className={styles.value}>{v}</div>
            </div>
          ))}
        </div>
        <div className={styles['ft']}></div>
      </div>
    </>
  );
};
export default PotentialPerformance;
