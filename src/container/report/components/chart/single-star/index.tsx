import React, { FC } from 'react';
import _ from 'lodash';

import StarItem from '../common/star-item';

import { ChartStarPropType } from '../types';

import styles from './index.less';

const defDescConf = ['几乎没有', '较小', '一般', '较大', '很大'];

/**
 * 单个星星图.
 *
 * @description type=chartSingleStar
 * @param {
 *  label?: string; // 标题.
 *  star: 1 | 2 | 3 | 4 | 5; // 星星数量.
 *  descConf?: string[]; // 各星对应描述语.
 * } data 标题.
 */
const ChartSingleStar: FC<{ data: ChartStarPropType.ValueType }> = ({ data }) => {
  const { label, star, descConf = [] } = data;

  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (_.isEmpty(data)) return <></>;

  return (
    <div className={styles.container}>
      <StarItem
        label={label}
        star={star}
        descConf={_.isEmpty(descConf) ? defDescConf : descConf}
        isSingle={true}
      />
    </div>
  );
};

export default ChartSingleStar;
