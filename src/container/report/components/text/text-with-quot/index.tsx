import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './index.less';

type DataItem = {
  title: string;
  desc: string;
};

interface PropType {
  data: [DataItem, DataItem];
}

const IndexWithQuot: FC<PropType> = ({ data = [] }) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!Array.isArray(data) || data.length < 2) return <></>;

  return (
    <div className={styles.box}>
      {data.map((item, idx) => (
        <div
          key={`item-container-${idx}`}
          className={classnames(
            styles['item-container'],
            { [styles.left]: idx === 0 },
            { [styles.right]: idx === 1 },
          )}
        >
          <div className={styles['title']}>{item.title}</div>
          <div className={styles['desc']}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default IndexWithQuot;
