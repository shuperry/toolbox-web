import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
  data: string[];
}

const Index: FC<IndexProps> = ({ title, data }) => {
  return (
    <div className={styles.wrap2}>
      <div className={styles['explain2-box']}>
        <div className={styles.title}>{title}</div>
        {(data || []).map((item, idx) => (
          <div key={`${item}-${idx}`} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
