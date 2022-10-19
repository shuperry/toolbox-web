import React, { FC } from 'react';

import ChartDiscItem from './chart-item';

import { PropType } from './types';

import styles from './index.less';

/**
 * DISC 图表.
 *
 * @param {
 *    Array<{
 *      title: string, // 标题.
 *      values: [number, number, number, number], // 数字取值在 1 至 -1 范围内.
 *      type: string // 图类型, DISC 四个字母中未出现的字母将会不显示值代表的动物图标.
 *    }>
 * } data 列表渲染源数据.
 * @param height DISC 图表高度, 默认 384.
 */
const ChartDisc: FC<PropType> = ({ data }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!Array.isArray(data) || !data.length) return <></>;

  return (
    <div className={styles['disc-chart-container']}>
      {data.map((item, idx) => (
        <ChartDiscItem key={`chart-item-${idx}`} data={item} />
      ))}
    </div>
  );
};

export default ChartDisc;
