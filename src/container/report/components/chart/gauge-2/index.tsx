import React, { FC } from 'react';
import classnames from 'classnames';
import { isArray } from 'lodash-es';

import { ChartGauge2PropType } from '../types';

import Chart from './chart';

import styles from './index.less';

/**
 * 仪表图-2.
 *
 * 支持 1 组和 2 组数据, 颜色均分为五档, 刻度: 弱、较弱、平均水平、良好、优秀.
 *
 * @param {Array<{ value: number; text: string; }>} data 图表要渲染的数据, value 为 0 - 100.
 */
const ChartGauge: FC<ChartGauge2PropType> = ({ data }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!isArray(data) || data.length === 0 || data.length > 2) return <></>;

  const multiple = data.length === 2;

  return (
    <div className={classnames(styles['gauge-2-wrapper'], { [styles.multiple]: multiple })}>
      {data.map((item, idx) => (
        <Chart key={`gauge-2-chart-wrapper-${idx}`} data={item} multiple={multiple} />
      ))}
    </div>
  );
};

export default ChartGauge;
