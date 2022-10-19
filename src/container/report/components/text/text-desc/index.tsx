import React, { FC, memo } from 'react';
import styles from './index.less';

interface IndexProps {
  data: string[];
}

const Index: FC<IndexProps> = ({ data }) => {
  return (
    <div className={styles.wraper}>
      <div className={styles.wrap}>
        {(data || []).map((item) => (
          <div className={styles.box}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Index;
