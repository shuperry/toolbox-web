import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './index.less';

interface PropType {
  type?: 'string' | 'number' | 'percent'; // 数值类型, 支持数字或百分比.
  stringValColor?: 'red' | 'orange' | 'yellow' | 'green' | 'dark-green'; // 值格式为字符串时的颜色值.
  val: number | string; // 需要高亮显示色值的份数, 0 - 100.
  markVal?: number; // 刻度线所在数值.
  _for: 'v1-2' | 'v3-6';
}

const isNumber = (obj: any): boolean => {
  return !Number.isNaN(Number(obj));
};

// 数值区间与颜色映射表.
const colorTypeConf = {
  red: {
    color: '#FF3837',
    range: [0, 27],
  },
  orange: {
    color: '#FF8700',
    range: [27, 49],
  },
  yellow: {
    color: '#ffc600',
    range: [49, 76],
  },
  green: {
    color: '#44B979',
    range: [76, 93],
  },
  'dark-green': {
    color: '#269250',
    range: [93, 99],
  },
};

const getColorByVal = (val: number): string => {
  for (let i = 0, k, colorRange; i < Object.keys(colorTypeConf).length; i++) {
    k = Object.keys(colorTypeConf)[i];
    colorRange = colorTypeConf[k].range;

    if (colorRange[0] < val && val <= colorRange[1]) {
      return k;
    }
  }

  return '';
};

const defStringValColor = 'green';

/**
 * 显示数值及进度条.
 *
 * @param {'number' | 'percent'} type 数值类型, 支持数字或百分比.
 * @param {number} val 需要高亮显示色值区域所占百分比, 0 - 100.
 * @param {number} markVal 刻度线所在数值.
 * @param {'red' | 'orange' | 'yellow' | 'green' | 'dark-green' | 'black'} stringValColor 数据值为字符串时, 显示的颜色类型, 支持: red | orange | yellow | green | dark-green.
 */
const SplitValItem: FC<PropType> = ({
  val = 0,
  type = 'percent',
  markVal = 0,
  stringValColor = 'green',
  _for = 'v1-2',
}) => {
  const percentChat = type === 'percent' ? '%' : '';

  return (
    <div className={styles.container}>
      {isNumber(val) && (
        <>
          <span
            className={classnames(
              styles.val,
              styles[_for],
              styles[`c-${getColorByVal(Number(val))}`],
            )}
          >
            {val}
            {percentChat}
          </span>
          <div className={styles['process-container']}>
            <div
              className={classnames(styles.process, styles[getColorByVal(Number(val))])}
              style={{ width: `${val}%` }}
            />

            {markVal > 0 && <div className={styles.mark} style={{ left: `${markVal}%` }} />}
          </div>
        </>
      )}

      {!isNumber(val) && (
        <>
          <span
            className={classnames(
              styles.val,
              styles[_for],
              styles[`c-${stringValColor || defStringValColor}`],
            )}
          >
            {val}
          </span>
        </>
      )}
    </div>
  );
};

export default SplitValItem;
