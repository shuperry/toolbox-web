import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
  data: string[];
}

const Index: FC<IndexProps> = ({ data, title }) => {
  return (
    <div className={styles['explain4-box']}>
      <div className={styles.title}>{title}</div>
      {(data || []).map((item, idx) => (
        <div key={`${item}-${idx}`} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Index;
